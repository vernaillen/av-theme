export default defineAppConfig({
  socials: [
    {
      $ref: '#/definitions/social',
    },
  ],
  definitions: {
    social: {
      title: '',
      url: '',
      icon: '',
    },
  },
})
