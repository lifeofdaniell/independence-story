import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
// ClassNamePlugin START (requires GSAP 3.2.2 or later)
gsap.registerPlugin({
  name: 'className',
  init: true,
  register(gsap, Plugin) {
    const CSSPlugin = gsap.plugins.css
    const cssCore =
      CSSPlugin.core || console.warn('Requires GSAP 3.2.1 or later') || {}
    const _removeLinkedListItem = gsap.core._removeLinkedListItem
    const _removeProperty = cssCore._removeProperty
    const PropTween = gsap.core.PropTween
    const _getAllStyles = function (target, uncache) {
      const styles = {}
      const computed = getComputedStyle(target)
      let cache = target._gsap
      let p
      for (p in computed) {
        if (isNaN(p) && p !== 'cssText' && p !== 'length') {
          styles[p] = computed[p]
        }
      }
      uncache && cache && (cache.uncache = true)
      gsap.getProperty(target, 'x')
      cache = target._gsap
      for (p in cache) {
        styles[p] = cache[p]
      }
      return styles
    }
    Plugin.prototype.init = function (target, endValue, tween) {
      const startClassList = target.getAttribute('class')
      const style = target.style
      const cssText = style.cssText
      const cache = target._gsap
      const classPT = cache.classPT
      const inlineToRemoveAtEnd = {}
      const end =
        endValue.charAt(1) !== '='
          ? endValue
          : startClassList.replace(
              new RegExp('(?:\\s|^)' + endValue.substr(2) + '(?![\\w-])'),
              ''
            ) + (endValue.charAt(0) === '+' ? ' ' + endValue.substr(2) : '')
      const plugin = this
      const changingVars = {}
      const startVars = _getAllStyles(target)
      const transformRelated = /(transform|perspective)/i
      const css = new CSSPlugin()
      const _renderClassName = function (ratio) {
        css.render(ratio, css)
        if (!ratio || ratio === 1) {
          target.setAttribute('class', ratio ? end : startClassList)
          for (const p in inlineToRemoveAtEnd) {
            _removeProperty(target, p)
          }
        }
      }
      let endVars
      let p
      if (classPT) {
        classPT.r(1, classPT.d)
        _removeLinkedListItem(classPT.d, classPT, '_pt')
      }
      target.setAttribute('class', end)
      // eslint-disable-next-line prefer-const
      endVars = _getAllStyles(target, true)
      target.setAttribute('class', startClassList)
      for (p in endVars) {
        if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
          changingVars[p] = endVars[p]
          if (!style[p] && style[p] !== '0') {
            inlineToRemoveAtEnd[p] = 1
          }
        }
      }
      cache.classPT = plugin._pt = new PropTween(
        null,
        target,
        'className',
        0,
        0,
        _renderClassName,
        plugin,
        0,
        -11
      )
      if (style.cssText !== cssText) {
        style.cssText = cssText
      }
      cache.uncache = true
      gsap.getProperty(target, 'x')
      css.init(target, changingVars, tween)
      plugin._props.push.apply(plugin._props, css._props)
      return 1
    }
  }
})
// ClassNamePlugin END

Vue.prototype.$gsap = gsap

Vue.prototype.$beforeHomeExit = () => {
  // console.log('Before Home Exit')
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
  // console.log('Home Exit')
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

Vue.prototype.$beforeHomeReveal = () => {
  // console.log('Before Home Reveal')
}

Vue.prototype.$homeReveal = (done) => {
  // console.log('Home Reveal')
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
}

Vue.prototype.$homeLoad = () => {
  // console.log('Home Load')
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
}

// Category
Vue.prototype.$beforeCategoryExit = () => {
  // console.log('Before Category Exit')
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
  gsap.set('.column-img__block', {
    clearProps: 'all'
  })
  gsap.set('.column-img__block.center', {
    clearProps: 'all'
  })
}

Vue.prototype.$categoryExit = (done) => {
  // console.log('Category Exit')
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

Vue.prototype.$beforeCategoryReveal = () => {
  // console.log('Before Category Reveal')
}

Vue.prototype.$categoryReveal = (done) => {
  // console.log('Category Reveal')
  const tl = gsap.timeline({ onComplete: done })
  tl.to(
    '.column-inner',
    {
      height: '100%',
      duration: 2.5,
      ease: 'Sine.inOut'
    },
    '>1'
  )
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
      scale: 2,
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
    '<+1.25'
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
    '>'
  )
  tl.to(
    '.column-img__block.center',
    {
      height: '570px',
      width: '530px',
      maxHeight: '39vw',
      maxWidth: '37vw',
      ease: 'power2.out',
      duration: 1.5
    },
    '<'
  )
  tl.to(
    '.column-img__block.center',
    {
      rotate: 2,
      y: 112,
      duration: 2,
      ease: 'power2.out'
    },
    '<'
  )
  tl.to(
    '.category-grid',
    {
      autoAlpha: 0,
      duration: 1.25
    },
    '>'
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
    '.header-img.small.right',
    {
      x: '50vw',
      rotate: -70,
      duration: 1,
      ease: 'power2.out'
    },
    '<-1.1'
  )
  tl.from(
    '.header-img.small.left',
    {
      x: '-55vw',
      rotate: 70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.2'
  )
}

Vue.prototype.$categoryLoad = () => {
  // console.log('Category Load')
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
    '.header-img.small.right',
    {
      x: '50vw',
      rotate: -70,
      duration: 1,
      ease: 'power2.out'
    },
    '<-0.4'
  )
  tl.from(
    '.header-img.small.left',
    {
      x: '-55vw',
      rotate: 70,
      duration: 1,
      ease: 'power2.out'
    },
    '<+0.2'
  )
}
