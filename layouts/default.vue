<template>
  <div>
    <audio
      id="bg-music"
      loop
      src="https://res.cloudinary.com/deljrzv80/video/upload/v1642231670/check%20media/wrapped-low_rl1jnd.mp3"></audio>

    <CustomCursor />

    <CategoryGrid />

    <transition
      :css="false"
      @before-enter="menuBEnter"
      @enter="menuEnter"
      @leave="menuLeave">
      <Menu v-if="menuOpen" />
    </transition>

    <!--   <transition :css="false" @leave="loaderLeave">
      <Loader v-if="loaderOpen" />
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
      this.resetCursor()
      this.unfillCircle()
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

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
          duration: 1.5,
          onComplete: done
        },
        '>'
      )
    },

    resetCursor() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.remove('cta')
      cursor.classList.remove('link')
      cursor.classList.remove('pastel-green')
      cursor.classList.remove('green')
      cursor.classList.remove('dark-cyan')
      cursor.classList.remove('black')
      cursor.classList.remove('white')
      text.classList.remove('show')
      text.textContent = ''
    },

    unfillCircle() {
      this.$gsap.set('.cursor-fill', {
        top: '100%'
      })
      this.$gsap.set('.btn-fill', {
        top: '100%'
      })
    }
  }
}
</script>
