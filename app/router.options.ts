import type { RouterConfig } from '@nuxt/schema'

// Scrolling is handled by the content page: it scrolls to the top once the old article
// has animated out, and smooth-scrolls to in-page anchors.
export default {
  scrollBehavior: () => false,
} satisfies RouterConfig
