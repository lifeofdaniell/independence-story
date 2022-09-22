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

  mounted() {
    setTimeout(() => {
      this.imageReveal()
    }, 500)
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
    },

    hoverIn() {
      this.$store.commit('toggleHover', true)
    },

    hoverOut() {
      this.$store.commit('toggleHover', false)
    }
  }
}
</script>

<style scoped>
.l-section.footer {
  margin-top: -5px;
}
.footer-header {
  text-align: center;
}

.footer-header.tech {
  font-size: 130px;
  color: #74e779;
}

@media screen and (max-width: 991px) {
  .footer-header.tech {
    font-size: 100px;
  }
}
@media screen and (max-width: 767px) {
  .footer-header.tech {
    font-size: 65px;
    line-height: 60px;
  }
}
@media screen and (max-width: 479px) {
  .footer-header.tech {
    font-size: 50px;
    line-height: 55px;
  }
}

.footer-text__wrapper.tech,
.footer-header.entertainment,
.footer-text__wrapper.entertainment,
.footer-text__wrapper.sports {
  color: black;
}

.footer-header.sports {
  color: #57867d;
}

.footer-header.politics,
.footer-header.random {
  color: #bde7be;
}
</style>
