<template>
  <!-- v-longpress="gotoCategory" -->
  <div>
    <Nav />
    <div class="scroller">
      <div class="l-section hero-section home">
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
                From the highest highs to the lowest lows. Despite it all, we
                are still here, standing tall.
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
    </div>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (to === from) {
      return {
        mode: 'out-in',
        css: false,
        enter(el, done) {
          this.$homeLoad()
          done()
        }
      }
    } else {
      return {
        mode: 'out-in',
        css: false,
        beforeLeave() {
          this.$beforeHomeExit()
        },
        leave(el, done) {
          this.$homeExit(done)
        },
        beforeEnter() {},
        enter(el, done) {
          this.$homeReveal(done)
        }
      }
    }
  },

  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.title,
      theme: this.theme,
      meta: [...this.meta]
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        theme: this.theme,
        description: this.description
      })
    },

    description() {
      return ''
    },

    theme() {
      return '#000000'
    },

    title() {
      return 'The Naija Story'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    window.addEventListener('resize', this.appHeight)
    this.appHeight()
    this.fallingImageOne()
    this.fallingImageTwo()
    this.fallingImageThree()
    this.fallingImageFour()
  },

  methods: {
    appHeight() {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    },

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
      tl.to(
        '.falling-img.one',
        {
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<+2'
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
      tl.to(
        '.falling-img.two',
        {
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<+2.5'
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
      tl.to(
        '.falling-img.three',
        {
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<+1.9'
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
      tl.to(
        '.falling-img.four',
        {
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<+3.3'
      )
    },

    gotoCategory() {
      this.$router.push('/politics')
    }
  }
}
</script>

<style scoped>
:root {
  --app-height: 100%;
}

@media screen and (max-width: 479px) {
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    height: var(--app-height);
  }

  .l-section.hero-section,
  .c-hero {
    height: var(--app-height);
  }
}
</style>
