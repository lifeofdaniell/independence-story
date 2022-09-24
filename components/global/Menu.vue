<template>
  <div class="c-menu">
    <div ref="scroller" class="c-menu__slider">
      <div v-if="isMobile" class="menu-slider__inner">
        <category
          category="Technology"
          img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          link="/technology">
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>

        <category
          category="Politics"
          colors="dark-cyan"
          img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          link="/politics"
          white>
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>

        <category
          category="Sports"
          colors="pastel-green"
          img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          link="/sports">
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>

        <category
          category="Entertainment"
          colors="green"
          img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          link="/entertainment">
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>

        <category
          category="Random Facts"
          colors="black"
          img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          link="/random"
          white>
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>
      </div>
      <marquee-text v-else :paused="isHovering" :repeat="4">
        <div
          class="menu-slider__inner"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false">
          <category
            category="Technology"
            img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            link="/technology">
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>

          <category
            category="Politics"
            colors="dark-cyan"
            img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            link="/politics"
            white>
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>

          <category
            category="Sports"
            colors="pastel-green"
            img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            link="/sports">
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>

          <category
            category="Entertainment"
            colors="green"
            img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            link="/entertainment">
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>

          <category
            category="Random Facts"
            colors="black"
            img="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            link="/random"
            white>
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>
        </div>
      </marquee-text>
    </div>
    <div class="c-menu-img__block">
      <img
        alt=""
        class="c-menu__img one"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img two"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img three"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img four"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img five"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
    </div>
    <div class="c-menu__overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
      isMobile: false
    }
  },

  mounted() {
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
    setTimeout(() => {
      this.menuInnerSlider()
    }, 100)
  },

  methods: {
    menuInnerSlider() {
      const wrapper = document.querySelector('.skeleton-flex')
      const wrapperWidth = wrapper.scrollWidth
      const tl = this.$gsap.timeline({})
      tl.to('.skeleton-flex.top', {
        x: -wrapperWidth - 15,
        duration: 10,
        repeat: -1,
        ease: 'none'
      })
      tl.from(
        '.skeleton-flex.bottom',
        {
          x: -wrapperWidth - 15,
          duration: 10,
          repeat: -1,
          ease: 'none'
        },
        '<'
      )
    },

    menuSlider() {
      const tl = this.$gsap.timeline({})
      tl.set('.c-category', {
        x: i => i * 0.2
      })
      tl.to('.c-category', {
        duration: 5,
        ease: 'none',
        x: '-=100%',
        modifiers: {
          x: this.$gsap.utils.unitize(x => parseFloat(x) % 500)
        },
        repeat: -1
      })
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

<style scoped>
.c-menu__slider::-webkit-scrollbar {
  display: none;
}

.c-menu__slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media screen and (max-width: 479px) {
  .c-menu {
    height: var(--app-height);
  }
}
</style>
