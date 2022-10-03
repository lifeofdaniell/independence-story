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
        <div class="volume-btn" @mouseenter="cursorIn" @mouseleave="cursorOut">
          <div
            class="volume-text"
            :class="inverse & !menuOpen & !loaderOpen ? 'black' : ''">
            Volume On
          </div>
          <div class="volume-icon">
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

  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    },

    loaderOpen() {
      return this.$store.getters.loadingState
    }
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', !this.menuOpen)
    },

    cursorIn() {
      const cursor = document.querySelector('.c-cursor')
      cursor.classList.add('link')
    },

    cursorOut() {
      const cursor = document.querySelector('.c-cursor')
      cursor.classList.remove('link')
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
