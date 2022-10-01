import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$gsap = gsap

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

Vue.prototype.$beforeHomeExit = () => {
  gsap.set('.category-grid', {
    yPercent: 100,
    autoAlpha: 1,
    zIndex: 700
  })
  gsap.set('.column-inner', {
    height: '250%'
  })
  gsap.set('.column-inner.center', {
    yPercent: 40
  })
  gsap.set('.column-inner.reversed', {
    yPercent: -40
  })
  gsap.set('.column-inner.edge', {
    yPercent: -100
  })
}

Vue.prototype.$homeExit = (done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.to('.home-link', {
    yPercent: -100,
    autoAlpha: 0
  })
  tl.to(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.to(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.to(
    '.category-grid',
    {
      yPercent: 0
    },
    '<-0.3'
  )
}

Vue.prototype.$beforeHomeReveal = () => {}

Vue.prototype.$homeReveal = (done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.to('.category-grid', {
    autoAlpha: 0
  })
  tl.from(
    '.home-link',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<'
  )
  tl.from(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.set(
    '.category-grid',
    {
      yPercent: 100
    },
    '>'
  )
}

Vue.prototype.$homeLoad = () => {
  const tl = gsap.timeline({})
  tl.from('.home-link', {
    yPercent: -100,
    autoAlpha: 0
  })
  tl.from(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.set(
    '.category-grid',
    {
      yPercent: 100
    },
    '>'
  )
}

// Category
Vue.prototype.$beforeCategoryExit = () => {
  gsap.set('.category-grid', {
    yPercent: 100,
    autoAlpha: 1,
    zIndex: 700
  })
  gsap.set('.column-inner', {
    height: '250%'
  })
  gsap.set('.column-inner.center', {
    yPercent: 40,
    justifyContent: 'space-between'
  })
  gsap.set('.column-inner.reversed', {
    yPercent: -40
  })
  gsap.set('.column-inner.edge', {
    yPercent: -100
  })
  gsap.set('.column-img__block', {
    clearProps: 'all'
  })
  gsap.set('.column-img__block.center', {
    clearProps: 'all'
  })
}

Vue.prototype.$categoryExit = (done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.to('.home-link', {
    yPercent: -100,
    autoAlpha: 0
  })
  tl.to(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.to(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.to(
    '.footer-img.left',
    {
      x: 0,
      y: 0,
      rotate: 0,
      ease: 'power2.out',
      duration: 0.75
    },
    '<-0.3'
  )
  tl.to(
    '.footer-img.right',
    {
      x: 0,
      y: 0,
      rotate: 0,
      ease: 'power2.out',
      duration: 0.75
    },
    '<+0.1'
  )
  tl.to(
    '.footer-img__block',
    {
      yPercent: 100,
      duration: 1
    },
    '<+0.4'
  )
  tl.to(
    '.category-grid',
    {
      yPercent: 0
    },
    '<+0.45'
  )
}

Vue.prototype.$beforeCategoryReveal = () => {}

Vue.prototype.$categoryReveal = (done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.to('.column-inner', {
    height: '100%',
    duration: 2.5,
    ease: 'Sine.inOut'
  })

  tl.to(
    '.column-inner.center',
    {
      yPercent: 0,
      duration: 2,
      ease: 'power4.inOut'
    },
    '<'
  )
  tl.to(
    '.column-inner.reversed',
    {
      yPercent: 0,
      duration: 2,
      ease: 'power4.inOut'
    },
    '<'
  )
  tl.to(
    '.column-inner.edge',
    {
      yPercent: 21,
      duration: 2,
      ease: 'power4.inOut'
    },
    '<'
  )
  tl.to(
    '.category-grid__flex',
    {
      scale: isMobile ? 1.5 : 2,
      duration: 2,
      ease: 'power4.inOut'
    },
    '<+1'
  )
  tl.to(
    '.column-img__block',
    {
      autoAlpha: 0
    },
    '<+1.5'
  )
  tl.to(
    '.column-img__block.center',
    {
      autoAlpha: 1
    },
    '<'
  )
  tl.to(
    '.category-grid__flex',
    {
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.5'
  )
  tl.to(
    '.column-inner.center',
    {
      justifyContent: 'center'
    },
    '<'
  )
  tl.to(
    '.column-img__block.center',
    {
      width: isMobile ? '300px' : '430px',
      height: isMobile ? '270px' : '430px',
      ease: 'power3.out',
      duration: 1.25
    },
    '<'
  )
  tl.to(
    '.column-img__block.center',
    {
      rotate: -150,
      y: '-120vh',
      ease: 'power2.out',
      duration: isMobile ? 2.2 : 1.5
    },
    '<+0.3'
  )
  tl.to(
    '.category-grid',
    {
      autoAlpha: 0,
      duration: 1.25
    },
    '<+0.5'
  )
  tl.from(
    '.home-link',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.75'
  )
  tl.from(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.header-img.center',
    {
      y: isMobile ? '700' : '120vh',
      rotate: 150,
      ease: 'power2.out',
      duration: 1.5
    },
    '<-1.5'
  )
  tl.from(
    '.header-img.small.right',
    {
      x: isMobile ? '700' : '60vw',
      rotate: -70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.65'
  )
  tl.from(
    '.header-img.small.left',
    {
      x: isMobile ? '-700' : '-55vw',
      rotate: 70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.2'
  )
  tl.set(
    '.category-grid',
    {
      yPercent: 100
    },
    '>'
  )
}

Vue.prototype.$categoryLoad = () => {
  const tl = gsap.timeline({})
  tl.from('.home-link', {
    yPercent: -100,
    autoAlpha: 0
  })
  tl.from(
    '.category-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.volume-btn',
    {
      yPercent: -100,
      autoAlpha: 0
    },
    '<+0.2'
  )
  tl.from(
    '.header-img.center',
    {
      y: isMobile ? '700' : '120vh',
      rotate: 150,
      ease: 'power2.out',
      duration: 1.5
    },
    '<-0.4'
  )
  tl.from(
    '.header-img.small.right',
    {
      x: isMobile ? '700' : '60vw',
      rotate: -70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.65'
  )
  tl.from(
    '.header-img.small.left',
    {
      x: isMobile ? '-700' : '-65vw',
      rotate: 70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.2'
  )
  tl.set(
    '.category-grid',
    {
      yPercent: 100
    },
    '>'
  )
}
