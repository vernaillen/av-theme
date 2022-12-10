export default defineAppConfig({
  myProject: {
    name: '',
  },
  socials: [
    {
      $ref: '#/definitions/social',
    },
  ],
  definitions: {
    social: {
      name: '',
      url: '',
      icon: '',
    },
  },
})
