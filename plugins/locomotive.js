import Vue from 'vue'
import locomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$initScroll = (scroller) => {
  // eslint-disable-next-line new-cap
  const locoScroll = new locomotiveScroll({
    el: document.querySelector(scroller),
    smooth: true,
    multiplier: 0.85,
    lerp: 0.035,
    tablet: {
      smooth: false
    },
    mobile: {
      smooth: false
    }
  })

  locoScroll.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
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

  ScrollTrigger.refresh(true)
}
