import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { defineEventHandler, setResponseHeader } from 'h3'

type SitemapUrl = {
  loc: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = getSiteUrl(config.public.site)

  const urls: SitemapUrl[] = [
    { loc: '/' },
    ...discoverDocsRoutes(),
  ]

  setResponseHeader(event, 'content-type', 'application/xml')

  return generateSitemap(urls, siteUrl)
})

function getSiteUrl(site: unknown): string {
  if (site && typeof site === 'object' && 'url' in site && typeof site.url === 'string') {
    return site.url.replace(/\/$/, '')
  }

  return ''
}

function discoverDocsRoutes(): SitemapUrl[] {
  const docsRoot = join(process.cwd(), 'content', 'docs')

  return walkMarkdownFiles(docsRoot)
    .map(filePath => contentPathToRoute(docsRoot, filePath))
    .filter((route): route is string => !!route)
    .sort()
    .map(loc => ({ loc }))
}

function walkMarkdownFiles(directory: string): string[] {
  return readdirSync(directory)
    .flatMap((entry) => {
      const fullPath = join(directory, entry)
      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        return walkMarkdownFiles(fullPath)
      }

      return fullPath.endsWith('.md') ? [fullPath] : []
    })
}

function contentPathToRoute(root: string, filePath: string): string | undefined {
  const relativePath = filePath
    .slice(root.length + 1)
    .replace(/\.md$/, '')

  if (relativePath === 'index') {
    return '/docs'
  }

  if (relativePath.includes('/.navigation') || relativePath.endsWith('.navigation')) {
    return undefined
  }

  const routePath = relativePath
    .split('/')
    .map(segment => segment.replace(/^\d+\./, ''))
    .join('/')

  return `/docs/${routePath}`
}

function generateSitemap(urls: SitemapUrl[], siteUrl: string): string {
  const urlEntries = urls
    .map((url) => {
      const loc = `${siteUrl}${url.loc}`
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
