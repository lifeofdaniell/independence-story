<template>
  <div class="c-menu">
    <div ref="scroller" class="c-menu__slider">
      <div v-if="isMobile" class="menu-slider__inner">
        <category
          category="Politics"
          colors="dark-cyan"
          img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg"
          link="/politics"
          white>
          <template #description>
            We must warn you, it’s not exactly rosy.
          </template>
        </category>

        <category
          category="Sports"
          colors="pastel-green"
          img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/first_goal_row6tl.jpg"
          link="/sports">
          <template #description>
            When it comes to sports? We go big or go home.
          </template>
        </category>

        <category
          category="Entertainment"
          colors="green"
          img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543914/naija_media/miss_world_vg6eaw.jpg"
          link="/entertainment">
          <template #description>
            There’s nothing bigger, nothing more Nigerian, than entertainment.
          </template>
        </category>

        <category
          category="Random Facts"
          colors="black"
          img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png"
          link="/random"
          white>
          <template #description>
            These are some facts we think you should know.
          </template>
        </category>

        <category
          category="Technology"
          img="https://res.cloudinary.com/deljrzv80/image/upload/v1664614918/naija_media/IBM_ud56af_jeaeg8.jpg"
          link="/technology">
          <template #description>
            Tech has become a glimmer of hope amidst many failing systems.
          </template>
        </category>
      </div>
      <marquee-text v-else :duration="35" :paused="isHovering" :repeat="4">
        <div
          class="menu-slider__inner"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false">
          <category
            category="Politics"
            colors="dark-cyan"
            img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg"
            link="/politics"
            white>
            <template #description>
              We must warn you, it’s not exactly rosy.
            </template>
          </category>

          <category
            category="Sports"
            colors="pastel-green"
            img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/first_goal_row6tl.jpg"
            link="/sports">
            <template #description>
              When it comes to sports? We go big or go home.
            </template>
          </category>

          <category
            category="Entertainment"
            colors="green"
            img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543914/naija_media/miss_world_vg6eaw.jpg"
            link="/entertainment">
            <template #description>
              There’s nothing bigger, nothing more Nigerian, than entertainment.
            </template>
          </category>

          <category
            category="Random Facts"
            colors="black"
            img="https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png"
            link="/random"
            white>
            <template #description>
              These are some facts we think you should know.
            </template>
          </category>

          <category
            category="Technology"
            img="https://res.cloudinary.com/deljrzv80/image/upload/v1664614918/naija_media/IBM_ud56af_jeaeg8.jpg"
            link="/technology">
            <template #description>
              Tech has become a glimmer of hope amidst many failing systems.
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
        src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Politics_darwhl.jpg" />
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
