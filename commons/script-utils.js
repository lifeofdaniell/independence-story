// JS File & CDN's
export default () => {
  return [
    {
      src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=625e97d0c6328bca29d5343f',
      type: 'text/javascript',
      integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
      crossorigin: 'anonymous'
    },
    {
      src: '/js/override-alert.js',
      type: 'text/javascript'
    },
    {
      src: '/js/webflow.js',
      type: 'text/javascript',
      body: 'true'
    }
  ]
}
