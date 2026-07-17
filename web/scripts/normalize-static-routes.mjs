import { copyFile, mkdir, readdir, stat } from 'node:fs/promises'
import { basename, dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = fileURLToPath(new URL('../.output/public/', import.meta.url))
const ignoredHtmlFiles = new Set(['200.html', '404.html', 'index.html'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)

    if (entry.isDirectory()) {
      yield* walk(path)
      continue
    }

    if (entry.isFile()) {
      yield path
    }
  }
}

for await (const filePath of walk(publicDir)) {
  const fileName = basename(filePath)

  if (!fileName.endsWith('.html') || ignoredHtmlFiles.has(fileName)) {
    continue
  }

  const routeDir = join(dirname(filePath), fileName.slice(0, -'.html'.length))

  try {
    if (!(await stat(routeDir)).isDirectory()) {
      continue
    }
  } catch {
    continue
  }

  const indexPath = join(routeDir, 'index.html')
  await mkdir(routeDir, { recursive: true })
  await copyFile(filePath, indexPath)

  console.log(`Normalized ${relative(publicDir, indexPath)}`)
}
