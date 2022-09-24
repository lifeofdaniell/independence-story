import Vue from 'vue'
// Internal imports
import metaUtils from '@/commons/meta-utils'
const textVersion = require('textversionjs')

// define a component that uses this mixin
Vue.mixin({
  computed: {
    mxDescription() {
      return '' // Enter description of site
    }
  },
  methods: {
    mxMetaUtils(meta) {
      if (!(meta && meta.url)) {
        meta.url = process.env.siteURL
      }
      // Ensures description doesn't contain html tags (160 characters)
      meta.description = textVersion(meta.description).substring(0, 157) + '...'
      return metaUtils(meta)
    }
  }
})
