import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$paragraph = () => {
  // eslint-disable-next-line no-unused-vars
  let isMobile = false
  function checkDevice() {
    if (window.innerWidth <= 1024) {
      isMobile = true
    } else {
      isMobile = false
    }
  }
  checkDevice()
  window.addEventListener('resize', checkDevice)

  const dates = gsap.utils.toArray('[data-date]').forEach((date, i) => {
    gsap.set(dates, {
      opacity: 1
    })
    if (i !== 0) {
      gsap.from(
        date,
        {
          scrollTrigger: {
            scroller: '.scroller',
            trigger: date,
            start: isMobile ? 'top 70%' : 'top 40%'
          },
          autoAlpha: 0
        },
        '>'
      )
    } else {
      gsap.from(
        date,
        {
          scrollTrigger: {
            scroller: isMobile ? '' : '.scroller',
            trigger: date,
            start: isMobile ? 'top 70%' : 'top 70%'
          },
          autoAlpha: 0
        },
        '>'
      )
    }
  })

  const headers = document.querySelectorAll('[data-header]')
  const results = Splitting({ target: headers, by: 'lines' })
  results.forEach((result) => {
    result.lines.forEach((line, lineIndex) => {
      line.forEach((word, wordIndex) => {
        gsap.set(headers, {
          opacity: 1
        })
        gsap.from(
          word,
          {
            scrollTrigger: {
              scroller: isMobile ? '' : '.scroller',
              trigger: result.el,
              start: isMobile ? 'top 50%' : 'top 60%'
            },
            autoAlpha: 0,
            x: 50,
            delay: lineIndex * 0.15
          },
          '>'
        )
      })
    })
  })

  const texts = document.querySelectorAll('[data-paragraph]')
  const paragraphs = Splitting({ target: texts, by: 'lines' })
  paragraphs.forEach((paragraph) => {
    paragraph.lines.forEach((line, lineIndex) => {
      line.forEach((word, wordIndex) => {
        gsap.set(texts, {
          opacity: 1
        })
        gsap.from(
          word,
          {
            scrollTrigger: {
              scroller: isMobile ? '' : '.scroller',
              trigger: paragraph.el,
              start: isMobile ? 'top 50%' : 'top 70%'
            },
            autoAlpha: 0,
            x: 50,
            delay: lineIndex * 0.15
          },
          '>'
        )
      })
    })
  })

  const textsB = document.querySelectorAll('[data-paragraph-bottom]')
  const paragraphsB = Splitting({ target: textsB, by: 'lines' })
  paragraphsB.forEach((paragraphB) => {
    paragraphB.lines.forEach((line, lineIndex) => {
      line.forEach((word, wordIndex) => {
        gsap.set(textsB, {
          opacity: 1
        })
        gsap.from(
          word,
          {
            scrollTrigger: {
              scroller: isMobile ? '' : '.scroller',
              trigger: paragraphB.el,
              start: 'top 50%'
            },
            autoAlpha: 0,
            x: 50,
            delay: lineIndex * 0.15
          },
          '>'
        )
      })
    })
  })
}
