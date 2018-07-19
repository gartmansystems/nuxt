module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Gartman NXP',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Gartman NXP'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/component-cache'
  ],
  axios: {
    baseURL: process.env.WSL_ENDPOINT || 'http://webportalapi.gartman.com',
    // baseURL: process.env.WSL_ENDPOINT || 'http://localhost:25083',
    retry: {
      retries: 3
    },
    // debug: true,
    progress: false
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/axios.js', '~/plugins/globalmixins.js', '~/plugins/filters.js', '~/plugins/eventbus.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  router: {
    base: ''
  },
  env: {
    version: '0.1',
    company: '0',
    productCatalogURL: 'http://webportalapi.gartman.com/product_catalog/',
    theme: {
      primary: '#0060a9',
      secondary: '#90CAF9',
      accent: '#2da343',
      error: '#f44336',
      warning: '#ffeb3b',
      info: '#2196F3',
      success: '#4caf50'
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#90CAF9',
    height: '4px'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/axios.js',
      '~/plugins/filters.js',
      '~/plugins/eventbus.js'
    ],
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}