import data from '~~/content/data.json'

// Same URL list as the old /sitemap, prerendered to /sitemap.xml.
export default defineEventHandler((event) => {
  const urls = data.toc.map(item => `https://www.cryptouxhandbook.com/${item.id}`)

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return '<?xml version="1.0" encoding="UTF-8" ?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <priority>0.5</priority>\n  </url>\n`).join('')
    + '</urlset>\n'
})
