import { withHttp } from './utils'

// This util makes it faster to implement meta:Open Graph, Twitter
// All these variable are overbidden if passed with meta param
let url = process.env.SITE_URL // From env

export default (meta) => {
  url = meta && meta.url ? withHttp(meta.url) : withHttp(url)

  return [
    {
      rel: 'icon',
      type: 'images/png',
      href: url + '/favicon.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'images/png',
      href: url + '/webclip.png'
    },
    {
      rel: 'stylesheet',
      href: '/assets/css/webflow.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/css/normalize.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/css/naija.webflow.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/css/main.css'
    },
    {
      hid: 'canonical',
      rel: 'canonical',
      href: url
    }
  ]
}
