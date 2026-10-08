// The content was written for the old site, which compiled marked's HTML output as a
// Vue template. Vue templates allow self-closing custom tags and camelCase attributes;
// an HTML parser does not, so normalize both before Nuxt Content parses the file.

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])

const kebab = (name: string) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

export function normalizeMarkdown(body: string): string {
  return body.replace(/<([a-z][a-z0-9-]*)(\s[^<>]*?)?\s*(\/?)>/g, (match, tag: string, attrs = '', selfClosing: string) => {
    const fixedAttrs = attrs.replace(/(\s:?)([a-z][a-zA-Z0-9]*[A-Z][a-zA-Z0-9]*)(?=\s*=)/g, (_: string, pre: string, name: string) => pre + kebab(name))
    if (selfClosing && !VOID_TAGS.has(tag)) return `<${tag}${fixedAttrs}></${tag}>`
    return `<${tag}${fixedAttrs}${selfClosing ? ' /' : ''}>`
  })
}
