export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true
  },
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/av-theme',
    },
  },
  generate: {
    routes: ['/', '/test', '/markdown-cheat-sheet', '/columns'],
  },
})
