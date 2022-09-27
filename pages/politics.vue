<template>
  <div>
    <Nav />
    <div class="scroller">
      <div class="l-section dark-cyan">
        <div class="l-container">
          <div class="category-hero">
            <div class="category-header small">
              <div>Politics</div>
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
              v-for="(timeline, index) in timelines"
              :key="index"
              :img-src="timeline.img"
              :reversed="index % 2 ? true : false">
              <template #timeline-date>
                {{ timeline.date }}
              </template>
              <template #timeline-header>
                {{ timeline.header }}
              </template>
              <template #timeline-text>
                {{ timeline.subheader }}
              </template>
              <template #timeline-subtext>
                {{ timeline.text }}
              </template>
            </timeline>
          </div>
        </div>
      </div>
      <next-section
        category="Entertainment"
        img-center="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-left="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-right="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        link="/entertainment"
        page="politics">
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

  data() {
    return {
      timelines: [
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'October 1st, 1963',
          header: 'The First Republic',
          subheader:
            'Although we had gained Independence, there was still the heavy influence of the British monarchy in Nigeria.',
          text: 'Under President Nnamdi Azikiwe’s regime, Nigeria became a republic. Thus, we became solely responsible for our own future.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'January 15th, 1966',
          header: 'First Military Coup',
          subheader:
            'The military coup marked the end of the first republic and the defining moment for what would be a series of unfortunate events.',
          text: 'It led to the death of many political leaders, including Nigeria’s first and only Prime Minister, Abubakar Tafawa Balewa.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'May 30, 1967',
          header: 'Biafran Civil War Breaks out',
          subheader:
            'Tensions in Northern and South-Eastern Nigeria led to the Igbos demanding secession and the breakout of a civil war.',
          text: 'The war was fought between Nigeria and the Republic of Biafrans.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '15th January 1970',
          header: 'End of the Biafran Civil War',
          subheader:
            'The end of what’s probably the darkest and lowest point in Nigeria’s history- between 500,000 and 2 million Biafran civilians died of starvation.',
          text: 'Millions more casualties were recorded.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'October 1st 1979',
          header: 'Return of Civilian Rule',
          subheader: 'A divided nation still picking up the broken pieces.',
          text: 'The return to civilian rule was a beacon of light after years of gloom.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'June 12, 1993',
          header: 'Annulled Election',
          subheader:
            'Moshood Kashimawo Olawale Abiola emerged the winner of a fair and peaceful presidential election.',
          text: 'However, the Head of State at the time, Ibrahim Babangida annulled the results. Thousands of Nigerians all over the country took to the streets in protest.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1995',
          header: 'Ogoni Nine execution',
          subheader:
            'Nigerian writer and activist, Ken Saro-Wiwa, alongside eight others were executed by the Nigerian government for their nonviolent campaign against environmental degradation of the land and waters of Ogoniland, Niger Delta.',
          text: "This devastating incident provoked international outrage and resulted in Nigeria's suspension from the Commonwealth of Nations for over three years."
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'May 29, 1999',
          header: 'A fresh start for Nigeria’s Democracy',
          subheader:
            'Olusegun Obasanjo was elected as President, taking the baton from military ruler, General Abdulsalami Alhaji Abubakar.',
          text: 'This ushered in the fourth republic and a new constitution.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2006',
          header: 'Niger Delta protests',
          subheader:
            'Residents of Niger Delta protested against oil companies exploiting their land without a substantial share of petroleum profits in return.',
          text: 'These protests, however, erupted into militant action that did not come to a halt till 2009.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'May 5, 2010',
          header: 'The death of a President',
          subheader:
            "President Umaru Musa Yar'Adua died- from a natural cause while in office.",
          text: 'He was replaced by his Vice, Goodluck Jonathan.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2014',
          header: 'Chibok Girls',
          subheader:
            'Reportedly, 276 female students were kidnapped from Government Girls Secondary School at the town of Chibok, Bornu State, by Islamic terrorist group, Boko Haram. This sparked the #BringBackOurGirls Movement all over the world with calls for action by the Nigerian government.',
          text: 'Many of the girls have managed to escape or been released by the militant group in deal exchanges with the Nigerian government.  It’s been eight years since the kidnapping and at least 100 of the girls are still missing.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'March 2015',
          header: 'First opposition to win a presidential election',
          subheader:
            "Muhammadu Buhari won the presidential election, becoming the first opposition candidate to do so in Nigeria's history.",
          text: ' It was truly a feat as President Goodluck Jonathan served only one term before he was voted out.'
        }
      ]
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
      return '#57867d'
    },

    title() {
      return 'Politics | The Naija Story'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    setTimeout(() => {
      this.$timelineParagraph()
    }, 100)
  }
}
</script>

<style scoped>
@media screen and (max-width: 479px) {
  .category-header.small {
    color: #74e779;
  }
}
</style>
