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
    // '@nuxtjs/i18n',
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
  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Poppins: [300, 400, 500, 700],
    },
  },
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
  },
  /* i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    langDir: './lang/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.yml' },
      { code: 'nl', iso: 'en-BE', file: 'nl.yml' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root', // recommended
    },
  }, */
  generate: {
    routes: ['/', '/test'],
  },
})
