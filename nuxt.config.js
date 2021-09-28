export default {
  target: 'static', // Deploy the content as static html
  head: {
    // Provide the page title
    title: 'Computron - Computer/Networking Repairs & Application Training',
    htmlAttrs: {
      // Set the html lang attribute to en (English)
      lang: 'en'
    },
    // Provide the page meta tags
    meta: [
      // Set the encoding to utf-8
      {charset: 'utf-8'},
      // Set the window viewport properties

      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // Website Meta (author, keywords, etc)
      {name: 'author', content: 'Jacob Read'},
      {
        hid: 'description',
        name: 'description',
        content: 'Computron offers computer/networking repairs, Helpful download links to everyday software, and provides training for computers & applications'
      },
      {name: 'keywords', content: 'computers,networking,repairs,software,downloads,training'},
      {name: 'format-detection', content: 'telephone=no'},
      // Open Graph Protocol Meta (see https://opengraphprotocol.org/)
      {name: 'og:title', content: 'Computron'},
      {name: 'og:type', content: 'website'},
      {
        name: 'og:description',
        content: 'Computron offers computer/networking repairs, Helpful download links to everyday software, and provides training for computers & applications'
      }
    ],
    link: [
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'}
    ]
  },
  components: true,
  router: {
    // Make sure the router adds /Computron/ to the url start (This is for github pages)
    base: '/Computron/'
  },
  hooks: {
    // This hook is run before all the files are parsed by nuxt
    'content:file:beforeParse' /* The before parse event */: (file /* The current file */) => {
      if (file.extension !== '.md') return; // Ignore the file if its not of .md type
      // Regular expression for matching [button](http://exmaple.com "Title")
      const buttonRegex = /\[button]\((?<url>(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?) "(?<text>[^"]+)"\)/g
      // Replace the data with a link element
      file.data = file.data.replace(buttonRegex, '<a class="button" href="$<url>">$<text></a>');
    }
  },
  // Use the nuxt content module
  modules: ['@nuxt/content'],
  // Use typescript build module
  buildModules: ['@nuxt/typescript-build']
}
