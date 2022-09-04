<template>
  <div>
    <Loader v-if="false" />
    <Nav />
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <Menu v-if="menuOpen" />
    </transition>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },

  watch: {
    $route(to, from) {
      this.closeMenu()
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

    beforeEnter(el) {
      this.$gsap.set(el, {
        yPercent: 100
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        yPercent: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      /*       this.$gsap.to(
        '.c-menu__link',
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1
        },
        '<+0.1'
      )
      this.$gsap.to(
        '.c-menu__sub-link',
        {
          duration: 0.75,
          y: 0,
          autoAlpha: 1
        },
        '<+0.75'
      )
      this.$gsap.to(
        '.c-menu__social-link',
        {
          ease: 'power1',
          autoAlpha: 1,
          stagger: 0.15,
          onComplete: done
        },
        '<+0.3'
      )
  */
    },

    leave(el, done) {
      this.$gsap.to(el, {
        yPercent: -100,
        // duration: 0.75,
        // ease: 'Sine.easeInOut'
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  }
}
</script>
