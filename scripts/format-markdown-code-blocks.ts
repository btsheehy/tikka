type FormatTarget = {
  stdinFilePath: string
}

const LANGUAGE_TO_TARGET: Record<string, FormatTarget> = {
  ts: { stdinFilePath: 'snippet.ts' },
  typescript: { stdinFilePath: 'snippet.ts' },
  tsx: { stdinFilePath: 'snippet.tsx' },
  js: { stdinFilePath: 'snippet.js' },
  javascript: { stdinFilePath: 'snippet.js' },
  jsx: { stdinFilePath: 'snippet.jsx' },
  mjs: { stdinFilePath: 'snippet.mjs' },
  cjs: { stdinFilePath: 'snippet.cjs' },
  json: { stdinFilePath: 'snippet.json' },
  jsonc: { stdinFilePath: 'snippet.jsonc' },
}

const getTrackedMarkdownFiles = (): string[] => {
  const proc = Bun.spawnSync({
    cmd: ['git', 'ls-files', '*.md'],
    stdout: 'pipe',
    stderr: 'pipe',
  })

  if (proc.exitCode !== 0) {
    const stderr = new TextDecoder().decode(proc.stderr).trim()
    throw new Error(`Failed to list markdown files: ${stderr}`)
  }

  const out = new TextDecoder().decode(proc.stdout)
  return out
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
}

const formatWithBiome = (source: string, stdinFilePath: string): string | null => {
  const proc = Bun.spawnSync({
    cmd: ['./node_modules/.bin/biome', 'format', '--stdin-file-path', stdinFilePath],
    stdin: Buffer.from(source),
    stdout: 'pipe',
    stderr: 'pipe',
  })

  if (proc.exitCode !== 0) {
    return null
  }

  return new TextDecoder().decode(proc.stdout)
}

const normalizeFenceBody = (code: string): string => code.replace(/\n?$/, '\n')

const fencedBlockRegex = /```([^\n`]*)\n([\s\S]*?)```/g

let changedFiles = 0
let changedBlocks = 0
let skippedBlocks = 0

for (const filePath of getTrackedMarkdownFiles()) {
  const original = await Bun.file(filePath).text()

  let fileChanged = false

  const updated = original.replace(fencedBlockRegex, (full, info, body) => {
    const infoText = String(info ?? '').trim()

    if (!infoText) {
      return full
    }

    const language = infoText.split(/\s+/)[0]?.toLowerCase()
    const target = LANGUAGE_TO_TARGET[language]

    if (!target) {
      return full
    }

    const formatted = formatWithBiome(body, target.stdinFilePath)

    if (formatted == null) {
      skippedBlocks += 1
      return full
    }

    const normalized = normalizeFenceBody(formatted)
    const currentNormalized = normalizeFenceBody(body)

    if (normalized === currentNormalized) {
      return full
    }

    fileChanged = true
    changedBlocks += 1
    return `\`\`\`${info}\n${normalized}\`\`\``
  })

  if (fileChanged) {
    changedFiles += 1
    await Bun.write(filePath, updated)
  }
}

console.log(
  `Markdown code block formatting complete: ${changedFiles} file(s), ${changedBlocks} block(s) updated, ${skippedBlocks} block(s) skipped.`
)
