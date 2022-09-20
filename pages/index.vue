<template>
  <div>
    <div class="l-section hero-section">
      <div class="l-container">
        <div class="c-hero">
          <div class="hero-text__wrapper">
            <h3 class="no-margin">
              We are telling the story of
            </h3>
            <h1 class="hero-text">
              What was and What is
            </h1>
            <h3>
              A tale of <span class="dgreen-text">62 years</span> of a nation
              with over <span class="dgreen-text">250 ethnic groups</span>
            </h3>
          </div>
          <div class="hero-subtext__wrapper">
            <p>
              From the highest highs to the lowest lows. Despite it all, we are
              still here, standing tall.
            </p>
          </div>
          <div class="hero-subtext__wrapper right">
            <div>Against All Odds</div>
          </div>
        </div>
      </div>
      <div class="hero-gradient"></div>
      <img
        alt=""
        class="falling-img one"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="falling-img two"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="falling-img three"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="falling-img four"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
    </div>
    <div class="letter-bg hero">
      <div class="n-letter">
        N
      </div>
      <div class="i-letter">
        I
      </div>
      <div class="g-letter">
        G
      </div>
      <div class="e-letter">
        E
      </div>
      <div class="r-letter">
        R
      </div>
      <div class="i-letter two">
        I
      </div>
      <div class="a-letter">
        A
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fallingImageOne()
    this.fallingImageTwo()
    this.fallingImageThree()
    this.fallingImageFour()
  },

  methods: {
    fallingImageOne() {
      const tl = this.$gsap.timeline({ repeat: -1 })
      tl.fromTo(
        '.falling-img.one',
        {
          top: '-25vh',
          rotation: 50
        },
        {
          top: '105vh',
          rotation: -20,
          duration: 4,
          ease: 'power1.inOut'
        }
      )
    },
    fallingImageTwo() {
      const tl = this.$gsap.timeline({ repeat: -1 })
      tl.fromTo(
        '.falling-img.two',
        {
          top: '-25vh',
          rotation: -50
        },
        {
          top: '105vh',
          rotation: 90,
          duration: 5,
          ease: 'power3.inOut'
        }
      )
    },
    fallingImageThree() {
      const tl = this.$gsap.timeline({ repeat: -1 })
      tl.fromTo(
        '.falling-img.three',
        {
          top: '-25vh',
          rotation: 30
        },
        {
          top: '105vh',
          rotation: -80,
          duration: 4,
          ease: 'power3.inOut'
        }
      )
    },
    fallingImageFour() {
      const tl = this.$gsap.timeline({ repeat: -1 })
      tl.fromTo(
        '.falling-img.four',
        {
          top: '-25vh',
          rotation: 50
        },
        {
          top: '105vh',
          rotation: -50,
          duration: 6,
          ease: 'power1.inOut'
        },
        '<+0.75'
      )
    }
  }
}
</script>

<style>
.letter-bg.hero {
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  z-index: 2;
  opacity: 0.25;
  transform: translate(0px, 12vw);
}

@media screen and (max-width: 767px) {
  .letter-bg.hero {
    transform: translate(0px, 10vw);
  }
}

@media screen and (max-width: 479px) {
  .letter-bg.hero {
    transform: translate(0px, 11vw);
  }
}
</style>
