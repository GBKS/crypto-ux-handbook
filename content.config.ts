import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // template.md is the starting point for new pages, not a page itself.
    pages: defineCollection({ type: 'page', source: { include: '*.md', exclude: ['template.md'] } }),
  },
})
