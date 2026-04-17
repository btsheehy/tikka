const typescript = require('@rollup/plugin-typescript')

const treeshake = {
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false,
}

const input = ['src/index.ts', 'src/tikka.ts']

module.exports = [
  {
    input,
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].js',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    treeshake,
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },
  {
    input,
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    treeshake,
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },
]
