import linkUtils from './commons/link-utils'
import scriptUtils from './commons/script-utils'
import metaUtils from './commons/meta-utils'
import * as pwaUtils from './commons/pwa-utils'

export default {
  ssr: false,

  env: {
    siteURL: process.env.SITE_URL,
    baseURL: process.env.BASE_URL,
    mediaURL: process.env.MEDIA_URL,
    token: process.env.TOKEN
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
    '@/plugins/prototype',
    '@/plugins/components',
    '@/plugins/locomotive'
  ],
  components: ['@/components/global', '@/components/includes'],

  buildModules: ['@nuxtjs/eslint-module'],

  generate: {
    fallback: true
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: process.env.BASE_URL
  },

  pwa: {
    manifest: pwaUtils.getManifest()
  },

  build: {
    transpile: ['gsap']
  }
}
