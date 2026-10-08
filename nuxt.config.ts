import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { normalizeMarkdown } from './lib/normalize-markdown'

const toc = JSON.parse(readFileSync('content/data.json', 'utf8')).toc as { id: string }[]
const previews = readdirSync('public/images/previews').filter(f => f.endsWith('.jpg')).map(f => f.slice(0, -4))
const scssTools = fileURLToPath(new URL('./app/assets/scss/_tools.scss', import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',
  modules: ['@nuxt/content'],

  css: ['~/assets/scss/global.scss'],

  runtimeConfig: {
    public: { previews },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'twitter:site', content: '@gbks' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/crypto-ux-handbook-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/crypto-ux-handbook-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/crypto-ux-handbook-180.png' },
      ],
    },
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    renderer: { anchorLinks: false },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "${scssTools}" as *;\n` },
      },
    },
  },

  hooks: {
    'content:file:beforeParse'(ctx) {
      if (ctx.file.id.endsWith('.md')) ctx.file.body = normalizeMarkdown(ctx.file.body)
    },
  },

  nitro: {
    // Plain static output everywhere. On Netlify, Nuxt would otherwise switch to its
    // netlify-static preset, which writes to dist/ and adds a catch-all _redirects file
    // that shadows the rules in netlify.toml.
    preset: 'static',
    prerender: {
      // wallets.html instead of wallets/index.html, so Netlify serves /wallets without a trailing-slash redirect.
      autoSubfolderIndex: false,
      routes: [...toc.map(t => '/' + t.id), '/dictionary', '/use-cases', '/sitemap.xml'],
    },
  },
})
