export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true
  },
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/anneleen',
    },
  },
  generate: {
    routes: ['/', '/test', '/markdown-cheat-sheet', '/alfa'],
  },
})
