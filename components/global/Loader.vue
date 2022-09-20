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

<style>
.c-loader__period {
  z-index: 3;
}

.letter-bg {
  position: fixed;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  z-index: 2;
  display: flex;
  width: 100%;
  padding-top: 5.5vw;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: translate(0px, 12vw);
  font-family: Grifter;
  color: #9be4a2;
  font-size: 23vw;
  line-height: 24vw;
  font-weight: 700;
  text-transform: uppercase;
}

.g-letter,
.e-letter,
.r-letter {
  opacity: 0.5;
}

.loader-progress__fill {
  width: 0%;
  transition: width 400ms ease;
}

@media screen and (max-width: 767px) {
  .letter-bg {
    transform: translate(0px, 10vw);
  }
}

@media screen and (max-width: 479px) {
  .letter-bg {
    transform: translate(0px, 11vw);
  }
}
</style>
