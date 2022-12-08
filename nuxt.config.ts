import { createResolver, logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using av-theme v${version} by Wouter Vernaillen`)

const { resolve } = createResolver(import.meta.url)

export { MenuItem } from './composables/types'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  css: [
    resolve('./assets/css/main.css'),
    resolve('./assets/css/markdown.css'),
    resolve('./assets/css/prose.css'),
    'animate.css/animate.min.css',
  ],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-directive-rehype'],
    },
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
    navigation: {
      fields: ['icon', 'titleTemplate', 'aside'],
    },
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    langDir: './locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root', // recommended
    },
  },
})
