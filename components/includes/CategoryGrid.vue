<template>
  <div class="category-grid" :class="gridColor">
    <div class="category-grid__flex">
      <div class="category-grid__column">
        <div class="column-inner edge">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column">
        <div class="column-inner center">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column alt">
        <div class="column-inner reversed">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column">
        <div class="column-inner center">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block center">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column alt">
        <div class="column-inner reversed">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column">
        <div class="column-inner center">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
      <div class="category-grid__column">
        <div class="column-inner edge">
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gridColor() {
      return this.$store.getters.getGridColor
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 479px) {
  .category-grid {
    height: var(--app-height);
  }
}
</style>
