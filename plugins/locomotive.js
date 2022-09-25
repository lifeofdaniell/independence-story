import Vue from 'vue'
import locomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$initScroll = (scroller) => {
  // eslint-disable-next-line new-cap, no-unused-vars
  const locoScroll = new locomotiveScroll({
    el: document.querySelector(scroller),
    smooth: true,
    multiplier: 0.65,
    lerp: 0.02,
    tablet: {
      breakpoint: 1024,
      smooth: false
    },
    smartphone: {
      breakpoint: 767,
      smooth: false
    }
  })

  locoScroll.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, {
            duration: 0,
            disableLerp: true
          })
        : locoScroll.scroll.instance.scroll.y
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  })
}
