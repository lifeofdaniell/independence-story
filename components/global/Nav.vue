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
        <div class="category-btn" @click="toggleMenu">
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
        <div class="volume-btn">
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
    }
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', !this.menuOpen)
    }
  }
}
</script>

<style>
.category-icon.active {
  width: 0px;
}
</style>
