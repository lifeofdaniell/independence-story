<template>
  <div>
    <CustomCursor />
    <Nav />
    <transition
      :css="false"
      @before-enter="menuBEnter"
      @enter="menuEnter"
      @leave="menuLeave">
      <Menu v-if="menuOpen" />
    </transition>
    <!---
    <transition :css="false" @leave="loaderLeave">
      <Loader v-if="loaderOpen" />
    </transition>

    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <Nuxt />
    </transition> -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    },
    loaderOpen() {
      return this.$store.getters.loadingState
    }
  },

  watch: {
    $route(to, from) {
      this.closeMenu()
    }
  },

  mounted() {
    this.attachEvents()
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

    beforeEnter(el) {},

    enter(el, done) {},

    leave(el) {},

    menuBEnter(el) {
      this.$gsap.set(el, {
        yPercent: 100
      })
    },

    menuEnter(el, done) {
      this.$gsap.to(el, {
        yPercent: 0,
        duration: 1.15,
        ease: 'power4.out'
      })
    },

    menuLeave(el, done) {
      this.$gsap.to(el, {
        yPercent: -100,
        duration: 1.15,
        ease: 'power4.out',
        onComplete: done
      })
    },

    loaderLeave(el, done) {
      this.$gsap.to('.c-loader__inner', {
        autoAlpha: 0,
        duration: 1
      })
      this.$gsap.to(
        '.c-loader__period',
        {
          autoAlpha: 0,
          duration: 1
        },
        '>'
      )
      this.$gsap.to(
        el,
        {
          autoAlpha: 0,
          duration: 3,
          onComplete: done
        },
        '>'
      )
    },

    attachEvents() {
      const links = document.querySelectorAll('a')
      links.forEach((link) => {
        link.addEventListener('mouseover', this.hoverIn)
        link.addEventListener('mouseout', this.hoverOut)
      })
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
