export default {
  target: 'static',
  head: {
    title: 'Computron - Computer/Networking Repairs & Application Training',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      /* Website Meta (author, keywords, etc) */
      {name: 'author', content: 'Jacob Read'},
      {
        hid: 'description',
        name: 'description',
        content: 'Computron offers computer/networking repairs, Helpful download links to everyday software, and provides training for computers & applications'
      },
      {name: 'keywords', content: 'computers,networking,repairs,software,downloads,training'},
      {name: 'format-detection', content: 'telephone=no'},
      /* Open Graph Protocol Meta (see https://opengraphprotocol.org/) */
      {name: 'og:title', content: 'Computron'},
      {name: 'og:type', content: 'website'},
      {
        name: 'og:description',
        content: 'Computron offers computer/networking repairs, Helpful download links to everyday software, and provides training for computers & applications'
      }
    ],
    link: [
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  router: {
    base: '/Computron/'
  },
  modules: ['@nuxt/content'],
}
