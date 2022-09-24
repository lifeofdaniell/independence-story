<template>
  <div class="l-section footer">
    <div class="l-container">
      <div class="c-section w-inline-block">
        <nuxt-link
          class="footer-header"
          :class="[
            category === 'Entertainment' ? 'ent' : '',
            category === 'Random Facts' ? 'tech' : '',
            page
          ]"
          :to="link"
          @mouseout.native="hoverOut"
          @mouseover.native="hoverIn">
          <div>{{ category }}</div>
        </nuxt-link>
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
      </div>
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
          start: this.isMobile ? 'bottom 130%' : 'bottom 110%'
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
    }
  }
}
</script>
