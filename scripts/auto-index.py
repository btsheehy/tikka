import os

filenames = list(filter(lambda filename: filename != 'index', map(lambda filename: filename.split('.')
                                                                  [0], sorted(os.listdir('../src/')))))

js_imports = "\n".join(list(
    map((lambda filename: "import " + filename + " from './" + filename + "'"), filenames)))

js_exports = """export default {{
\t{0}
}}""".format(",\n\t".join(list(map(lambda filename: filename, filenames))))

print(js_imports)
print("\n")
print(js_exports)
