export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'se-databar.yode.group',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', type: 'image/png', href: '/favicon.png', sizes: '64x64' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'bootstrap/dist/css/bootstrap-grid.min.css' },
    { src: 'swiper/swiper-bundle.css' },
    { src: '~/assets/scss/ui.scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/assets/js/init', mode: 'client' },
    // { src: '~/plugins/glightbox.client', mode: 'client' },
    { src: '~/plugins/aos.client', mode: 'client' }
    // { src: '~/plugins/three.client', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-MBK72FF'
  },

  optimizedImages: {
    optimizeImages: true,
    // optimizeImagesInDev: true,
    inlineImageLimit: 12 * 1024,
    mozjpeg: {
      quality: 80
    },
    webp: {
      quality: 85
    },
    svgo: {
      plugins: [
        { name: 'removeViewBox', active: false }
      ]
    }
  },

  generate: {
    fallback: '404.html',
    crawler: true,
    subFolders: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
