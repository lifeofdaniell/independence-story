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
              :src="setGridImage(gridColor).imgArr[0]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[1]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[2]" />
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
              :src="setGridImage(gridColor).imgArr[1]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[2]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[3]" />
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
              :src="setGridImage(gridColor).imgArr[2]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[3]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[0]" />
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
              :src="setGridImage(gridColor).imgArr[3]" />
          </div>
          <div class="column-img__block center">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[0]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[1]" />
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
              :src="setGridImage(gridColor).imgArr[0]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[1]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[2]" />
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
              :src="setGridImage(gridColor).imgArr[1]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[2]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[3]" />
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
              :src="setGridImage(gridColor).imgArr[2]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[3]" />
          </div>
          <div class="column-img__block">
            <img
              alt=""
              class="grid-img"
              loading="lazy"
              :src="setGridImage(gridColor).imgArr[0]" />
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
  },

  methods: {
    setGridImage(gridColor) {
      const _grid = {
        imgArr: []
      }
      switch (gridColor) {
        case 'dark-cyan':
          _grid.imgArr = [
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_3_xjeff3.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_2_s99ot9.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Politics_darwhl.jpg'
          ]
          return _grid
        case 'green':
          _grid.imgArr = [
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/membership_british_zok2sr.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543914/naija_media/miss_world_vg6eaw.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664588365/naija_media/casino-cinema_afhcpb.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Fela_idxfwi.jpg'
          ]
          return _grid
        case 'pastel-green':
          _grid.imgArr = [
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543936/naija_media/Nojim_Maiyegun_bxmydd.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/first_goal_row6tl.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543938/naija_media/wimbeldon_cwuic1.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/first_gold_medal_pbjcvu.jpg'
          ]
          return _grid
        case 'white':
          _grid.imgArr = [
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664614918/naija_media/IBM_ud56af_jeaeg8.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/COAN_i2d3fu.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664614919/naija_media/IBM-2_uypwix_n4lflz.jpg',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/birth_phones_bpitse.jpg'
          ]
          return _grid
        case 'black':
          _grid.imgArr = [
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Ghana_must_go_uqn9mw.png',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/Nobel_prize_loglzj.png',
            'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/longest_bridge_vrzwat.png'
          ]
          return _grid
        default:
          _grid.imgArr = [
            'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
            'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
            'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
            'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg'
          ]
          return _grid
      }
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
