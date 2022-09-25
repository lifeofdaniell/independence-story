<template>
  <div>
    <Nav inverse />
    <div class="scroller">
      <div class="l-section">
        <div class="l-container">
          <div class="category-hero">
            <div class="category-header small">
              <div>Entertainment</div>
            </div>
            <div class="storyline-header">
              <div>Nigeria gains Independence</div>
            </div>
            <div class="header-img__wrapper">
              <div class="storyline-subheader top">
                <div>October 1st, 1960</div>
              </div>
              <div class="header-img__block">
                <img
                  alt=""
                  class="header-img center"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
              </div>
              <div class="storyline-subheader">
                <div>
                  Millions of Nigerians poured out to the streets in celebration
                  of a new dawn. On this day, Nigeria was born.
                </div>
              </div>
            </div>
          </div>
          <div class="c-timeline__wrapper">
            <timeline
              colors="green"
              img-src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg">
              <template #timeline-date>
                October 1st, 1963
              </template>
              <template #timeline-header>
                The First Republic
              </template>
              <template #timeline-text>
                Although we had gained Independence, there was still the heavy
                influence of the British monarchy in Nigeria.
              </template>
              <template #timeline-subtext>
                Under President Nnamdi Azikiwe’s regime, Nigeria became a
                republic. Thus, we became solely responsible for our own future.
              </template>
            </timeline>

            <timeline
              colors="green"
              img-src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              reversed>
              <template #timeline-date>
                January 15th, 1966
              </template>
              <template #timeline-header>
                First Military Coup
              </template>
              <template #timeline-text>
                The military coup marked the end of the first republic and the
                defining moment for what would be a series of unfortunate
                events.
              </template>
              <template #timeline-subtext>
                It led to the death of many political leaders, including
                Nigeria’s first and only Prime Minister, Abubakar Tafawa Balewa.
              </template>
            </timeline>

            <timeline
              colors="green"
              img-src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg">
              <template #timeline-date>
                May 30, 1967
              </template>
              <template #timeline-header>
                Biafran Civil War Breaks out
              </template>
              <template #timeline-text>
                Tensions in Northern and South-Eastern Nigeria led to the Igbos
                demanding secession and the breakout of a civil war.
              </template>
              <template #timeline-subtext>
                The war was fought between Nigeria and the Republic of Biafrans.
              </template>
            </timeline>
          </div>
        </div>
      </div>
      <next-section
        category="Sports"
        img-center="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-left="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-right="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        link="/sports"
        page="entertainment">
        <template #description>
          We may not be winning any medals with our politics, but when it comes
          to sports? We go big or go home.
        </template>
      </next-section>
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
          this.$categoryLoad()
          done()
        }
      }
    } else {
      return {
        mode: 'out-in',
        css: false,
        beforeLeave() {
          this.$beforeCategoryExit()
        },
        leave(el, done) {
          this.$categoryExit(done)
        },
        beforeEnter() {
          this.$beforeCategoryReveal()
        },
        enter(el, done) {
          this.$categoryReveal(done)
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
      return '#74e779'
    },

    title() {
      return 'Entertainment | The Naija Story'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  }
}
</script>

<style scoped>
.l-section,
.l-section.footer {
  background: #74e779;
}

.storyline-header,
.category-header.small,
.storyline-subheader {
  color: black;
}
</style>
