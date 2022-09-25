<template>
  <div>
    <CustomCursor />
    <CategoryGrid />
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
      switch (to.name) {
        case 'politics':
          this.$store.commit('updateGridColor', 'dark-cyan')
          break
        case 'entertainment':
          this.$store.commit('updateGridColor', 'green')
          break
        case 'sports':
          this.$store.commit('updateGridColor', 'pastel-green')
          break
        case 'technology':
          this.$store.commit('updateGridColor', 'white')
          break
        case 'random':
          this.$store.commit('updateGridColor', 'black')
          break
        default:
          break
      }
      this.closeMenu()
    }
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
    }
  }
}
</script>
