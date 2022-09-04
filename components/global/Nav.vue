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
        <div class="category-btn">
          <div class="category-icon">
            <img
              alt=""
              class="icon-img"
              loading="lazy"
              src="/assets/images/Group.svg" />
          </div>
          <div class="category-text">
            Select a category
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
