import linkUtils from './commons/link-utils'
import scriptUtils from './commons/script-utils'
import metaUtils from './commons/meta-utils'
import * as pwaUtils from './commons/pwa-utils'

export default {
  ssr: false,

  env: {
    siteURL: process.env.SITE_URL,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME
  },

  target: 'static',

  head: {
    title: 'The Story of Nigeria',
    meta: [...metaUtils()],
    link: [...linkUtils()],
    script: [...scriptUtils()]
  },

  css: [],
  plugins: [
    '@/plugins/components',
    '@/plugins/directives',
    '@/plugins/locomotive',
    '@/plugins/mixins',
    '@/plugins/prototype',
    '@/plugins/splitting'
  ],
  components: ['@/components/global', '@/components/includes'],

  buildModules: ['@nuxtjs/eslint-module'],

  generate: {
    fallback: true
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {},

  pwa: {
    manifest: pwaUtils.getManifest()
  },

  build: {
    transpile: ['gsap']
  }
}
