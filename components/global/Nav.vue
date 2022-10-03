<template>
  <div class="c-nav">
    <div class="l-container">
      <div class="c-nav__inner">
        <nuxt-link
          aria-current="page"
          class="home-link w-inline-block w--current"
          to="/"
          @mouseenter.native="cursorIn"
          @mouseleave.native="cursorOut">
          <div
            class="c-nav__text"
            :class="inverse & !menuOpen & !loaderOpen ? 'black' : ''">
            Independence Day
          </div>
          <div class="flag">
            🇳🇬
          </div>
        </nuxt-link>
        <div
          v-show="!loaderOpen"
          class="category-btn"
          @click="toggleMenu"
          @mouseenter="cursorIn"
          @mouseleave="cursorOut">
          <div class="category-icon" :class="menuOpen ? 'active' : ''">
            <img
              v-if="inverse & !menuOpen & !loaderOpen"
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/category-black.svg" />
            <img
              v-else
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/Group.svg" />
          </div>
          <div
            class="category-text"
            :class="inverse & !menuOpen & !loaderOpen ? 'black' : ''">
            {{ menuOpen ? 'Back To Home' : 'Select a category' }}
          </div>
        </div>
        <div
          class="volume-btn"
          @click="toggleSound"
          @mouseenter="cursorIn"
          @mouseleave="cursorOut">
          <div
            class="volume-text"
            :class="inverse & !menuOpen & !loaderOpen ? 'black' : ''">
            {{ isPlaying ? 'Sound On' : 'Sound Off' }}
          </div>
          <div v-if="isPlaying" class="volume-icon">
            <img
              v-if="inverse & !menuOpen & !loaderOpen"
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/volume-black.svg" />
            <img
              v-else
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/volume.svg" />
          </div>
          <div v-else class="volume-icon">
            <img
              v-if="inverse & !menuOpen & !loaderOpen"
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/mute-black.svg" />
            <img
              v-else
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/mute.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inverse: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      sound: null
    }
  },

  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    },

    loaderOpen() {
      return this.$store.getters.loadingState
    },

    isPlaying() {
      return this.$store.getters.getPlayingState
    }
  },

  mounted() {
    this.sound = document.querySelector('.bg-music')
    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange,
      false
    )
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', !this.menuOpen)
    },

    cursorIn() {
      const cursor = document.querySelector('.c-cursor')
      cursor.classList.add('link')
    },

    toggleSound() {
      if (!this.isPlaying) {
        this.sound.play()
        this.$store.commit('updatePlayingState', true)
      } else {
        this.sound.pause()
        this.$store.commit('updatePlayingState', false)
      }
    },

    cursorOut() {
      const cursor = document.querySelector('.c-cursor')
      cursor.classList.remove('link')
    },

    handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        this.sound.pause()
      } else if (this.isPlaying) {
        this.sound.play()
        this.$store.commit('updatePlayingState', true)
      }
    }
  }
}
</script>

<style scoped>
.c-nav {
  pointer-events: none;
}
.home-link,
.category-btn,
.volume-btn {
  pointer-events: all;
}
</style>
