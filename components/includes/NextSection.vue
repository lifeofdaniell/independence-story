<template>
  <div class="l-section footer">
    <div class="l-container">
      <nuxt-link class="c-section w-inline-block" :to="link">
        <div
          class="footer-header"
          :class="category === 'Entertainment' ? 'ent' : ''">
          <div>{{ category }}</div>
        </div>
        <div class="footer-text__wrapper">
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

  mounted() {
    setTimeout(() => {
      this.imageReveal()
    }, 1000)
  },

  methods: {
    imageReveal() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          scroller: '.scroller',
          trigger: '.footer',
          start: 'bottom 110%'
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
    }
  }
}
</script>

<style scoped>
.l-section.footer {
  margin-top: -5px;
}
</style>
