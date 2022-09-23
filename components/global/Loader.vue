<template>
  <div class="c-loader">
    <div class="c-loader__inner">
      <h4 class="no-margin">
        Where it all started
      </h4>
      <div class="loader-year">
        1960
      </div>
      <div class="loader-progress__bar">
        <div class="loader-progress__fill"></div>
      </div>
    </div>
    <div class="c-loader__period">
      <h4 class="no-margin">
        1960-2022
      </h4>
    </div>
    <div class="letter-bg load">
      <div class="n-letter fall">
        N
      </div>
      <div class="i-letter fall">
        I
      </div>
      <div class="g-letter fall">
        G
      </div>
      <div class="e-letter fall">
        E
      </div>
      <div class="r-letter fall">
        R
      </div>
      <div class="i-letter two fall">
        I
      </div>
      <div class="a-letter fall">
        A
      </div>
    </div>
    <div class="loader-gradient"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagesLoaded: 0,
      totalImages: 0,
      percent: 0,
      img: []
    }
  },

  mounted() {
    this.loadingAnimation()
  },

  methods: {
    loadingAnimation() {
      this.$gsap.from('.letter-bg.load', {
        delay: 2,
        bottom: '50%',
        fontSize: '17vw',
        lineHeight: '18vw',
        duration: 4,
        ease: 'bounce.out'
      })
      this.$gsap.from(
        '.fall',
        {
          translateX: '0vw',
          translateY: '0vw',
          rotate: 0,
          duration: 10,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.from(
        '.c-loader__inner',
        {
          autoAlpha: 0,
          duration: 1.5,
          onComplete: this.fetchImages
        },
        '<+5'
      )
    },

    async fetchImages() {
      const images = await this.$store.dispatch('fetchImages')
      this.img = images.map(a => a.url)
      this.totalImages = this.img.length
      this.imgLoaded()
      for (let i = 0; i < this.totalImages; i++) {
        const tImg = new Image()
        tImg.onload = this.imgLoaded
        tImg.onerror = this.imgLoaded
        tImg.src = this.img[i]
      }
    },

    imgLoaded() {
      this.imagesLoaded += 1
      this.percent = ((100 / this.totalImages) * this.imagesLoaded - 1) << 0
      document.querySelector(
        '.loader-progress__fill'
      ).style.width = `${this.percent}%`
      if (this.imagesLoaded === this.totalImages) {
        return this.doneLoading()
      }
    },

    doneLoading() {
      this.$store.commit('toggleLoading', false)
    }
  }
}
</script>
