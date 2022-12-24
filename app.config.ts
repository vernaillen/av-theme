export default defineAppConfig({
  socials: [
    {
      $ref: '#/definitions/social',
    },
  ],
  tagembed: {
    id: '',
  },
  definitions: {
    social: {
      title: '',
      url: '',
      icon: '',
    },
  },
})
