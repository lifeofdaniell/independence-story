<template>
  <div class="c-nav">
    <div class="l-container">
      <div class="c-nav__inner">
        <nuxt-link
          aria-current="page"
          class="home-link w-inline-block w--current"
          to="/">
          <div class="c-nav__text">
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
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/Group.svg" />
          </div>
          <div class="category-text">
            {{ menuOpen ? 'Back To Home' : 'Select a category' }}
          </div>
        </div>
        <div class="volume-btn" @mouseout="hoverOut" @mouseover="hoverIn">
          <div class="volume-text">
            Volume On
          </div>
          <div class="volume-icon">
            <img
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

<style>
.category-icon.active {
  width: 0px;
}
</style>
