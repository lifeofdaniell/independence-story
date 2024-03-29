<template>
  <div class="l-section footer">
    <div class="l-container">
      <nuxt-link
        class="c-section w-inline-block"
        :to="link"
        @mouseenter.native="cursorIn"
        @mouseleave.native="cursorOut">
        <div
          class="footer-header"
          :class="[
            category === 'Entertainment' ? 'ent' : '',
            category === 'Random Facts' ? 'tech' : '',
            page
          ]">
          <div>{{ category }}</div>
        </div>
        <div class="footer-text__wrapper" :class="page">
          <div>
            <slot name="description" />
          </div>
        </div>
        <div class="click-prompt">
          Click anywhere to view
        </div>
        <div class="footer-img__block">
          <img alt="" class="footer-img left" loading="lazy" :src="imgLeft" />
          <img
            alt=""
            class="footer-img center"
            loading="lazy"
            :src="imgCenter" />
          <img alt="" class="footer-img right" loading="lazy" :src="imgRight" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '/'
    },
    category: {
      type: String,
      required: true
    },
    imgLeft: {
      type: String,
      required: true
    },
    imgCenter: {
      type: String,
      required: true
    },
    imgRight: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isMobile: false
    }
  },

  mounted() {
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
    setTimeout(() => {
      this.imageReveal()
    }, 500)
  },

  methods: {
    imageReveal() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          scroller: this.isMobile ? '' : '.scroller',
          trigger: '.footer',
          start: this.isMobile ? 'bottom 130%' : 'bottom 120%'
        }
      })
      tl.from('.footer-img__block', {
        yPercent: 100,
        duration: 1
      })
      tl.from(
        '.footer-img.left',
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: 'power2.out',
          duration: 0.75
        },
        '<+0.75'
      )
      tl.from(
        '.footer-img.right',
        {
          x: 0,
          y: 0,
          rotate: 0,
          ease: 'power2.out',
          duration: 0.75
        },
        '<'
      )
    },

    hoverIn() {
      this.$store.commit('toggleHover', true)
    },

    hoverOut() {
      this.$store.commit('toggleHover', false)
    },

    checkDevice() {
      if (window.innerWidth < 767) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },

    cursorIn() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.add('cta')
      text.textContent = 'View'
      text.classList.add('show')
    },

    cursorOut() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.remove('cta')
      text.textContent = ''
      text.classList.remove('show')
    }
  }
}
</script>
