export default defineAppConfig({
  myProject: {
    name: 'nuxt theme for anneleenvernaillen.com'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myProject?: {
      /** Project name */
      name?: string
    }
  }
}
