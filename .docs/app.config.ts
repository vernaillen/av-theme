export default defineAppConfig({
  docus: {
    title: 'av-theme',
    socials: {
      github: 'vernaillen/av-theme',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    aside: {
      level: 1,
      filter: [],
    },
    header: {
      title: false,
      logo: false,
      showLinkIcon: true
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'av-theme created by Wouter Vernaillen',
        href: 'https://vernaillen.dev',
      }
    }
  }
})
