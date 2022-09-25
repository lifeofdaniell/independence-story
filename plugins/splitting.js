import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Splitting from 'splitting'
// import 'splitting/dist/splitting.css'
// import 'splitting/dist/splitting-cells.css'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$paragraph = (paragraph) => {
  // eslint-disable-next-line no-unused-vars
  let isMobile = false
  function checkDevice() {
    if (window.innerWidth < 767) {
      isMobile = true
    } else {
      isMobile = false
    }
  }
  checkDevice()
  window.addEventListener('resize', checkDevice)
}
