<template>
  <div class="c-nav">
    <div class="l-container">
      <div class="c-nav__inner">
        <nuxt-link
          aria-current="page"
          class="home-link w-inline-block w--current"
          to="/"
          @mouseout.native="hoverOut"
          @mouseover.native="hoverIn">
          <div class="c-nav__text" :class="inverse & !menuOpen ? 'black' : ''">
            Independence Day
          </div>
          <div class="flag">
            🇳🇬
          </div>
        </nuxt-link>
        <!-- v-if="!loaderOpen" -->
        <div
          class="category-btn"
          @click="toggleMenu"
          @mouseout="hoverOut"
          @mouseover="hoverIn">
          <div class="category-icon" :class="menuOpen ? 'active' : ''">
            <img
              v-if="inverse & !menuOpen"
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
            :class="inverse & !menuOpen ? 'black' : ''">
            {{ menuOpen ? 'Back To Home' : 'Select a category' }}
          </div>
        </div>
        <div class="volume-btn" @mouseout="hoverOut" @mouseover="hoverIn">
          <div class="volume-text" :class="inverse & !menuOpen ? 'black' : ''">
            Volume On
          </div>
          <div class="volume-icon">
            <img
              v-if="inverse & !menuOpen"
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

    hoverIn() {
      this.$store.commit('toggleHover', true)
    },

    hoverOut() {
      this.$store.commit('toggleHover', false)
    }
  }
}
</script>
