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
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_3_xjeff3.jpg" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_2_s99ot9.jpg" />
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
              :read-link="timeline.read"
              :reversed="index % 2 ? true : false"
              :timeline="timeline">
              <template #timeline-date>
                {{ timeline.date }}
              </template>
              <template #timeline-header>
                {{ timeline.header }}
              </template>
              <template #timeline-text>
                {{ timeline.subheader }}
              </template>
              <template #timeline-source>
                {{ timeline.source }}
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
        img-center="https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/membership_british_zok2sr.jpg"
        img-left="https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/wizkid_O2_g0dtzg.jpg"
        img-right="https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Fela_idxfwi.jpg"
        link="/entertainment"
        page="politics">
        <template #description>
          The Nigerian entertainment industry spans countries and continents and
          is perhaps our greatest export. There’s nothing bigger, nothing more
          Nigerian, than entertainment.
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/first_republic_nghfin.jpg',
          date: 'October 1st, 1963',
          header: 'The First Republic',
          subheader:
            'Although we had gained Independence, there was still the heavy influence of the British monarchy in Nigeria.',
          text: 'Under President Nnamdi Azikiwe’s regime, Nigeria became a republic. Thus, we became solely responsible for our own future.',
          source: 'Oasdom'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/first_military_coup_ohkem8.jpg',
          date: 'January 15th, 1966',
          header: 'First Military Coup',
          subheader:
            'The military coup marked the end of the first republic and the defining moment for what would be a series of unfortunate events.',
          text: 'It led to the death of many political leaders, including Nigeria’s first and only Prime Minister, Abubakar Tafawa Balewa.',
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543922/naija_media/start_Biafran_war_f6bqut.jpg',
          date: 'May 30, 1967',
          header: 'Nigerian Civil War Breaks out',
          subheader:
            'Tensions in Northern and South-Eastern Nigeria led to the Igbos demanding secession and the breakout of a civil war.',
          text: 'The war was fought between Nigeria and the Republic of Biafrans.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/Civil_War_ends_quhymn.jpg',
          date: '15th January 1970',
          header: 'End of the Nigerian Civil War',
          subheader:
            'The end of what’s probably the darkest and lowest point in Nigeria’s history- between 500,000 and 2,000,000 Biafran civilians died of starvation.',
          text: 'Millions more casualties were recorded.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Return_to_civilian_rule_bvgspj.jpg',
          date: 'October 1st 1979',
          header: 'Return of Civilian Rule',
          subheader: 'A divided nation still picking up the broken pieces.',
          text: 'The return to civilian rule was a beacon of light after years of gloom.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543922/naija_media/annulled_election_euhnbw.jpg',
          date: 'June 12, 1993',
          header: 'Annulled Election',
          subheader:
            'Moshood Kashimawo Olawale Abiola emerged the winner of a fair and peaceful presidential election.',
          text: 'However, the Head of State at the time, Ibrahim Babangida annulled the results. Thousands of Nigerians all over the country took to the streets in protest.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/ogoni_nine_igxoe8.jpg',
          date: '1995',
          header: 'Ogoni Nine execution',
          subheader:
            'Nigerian writer and activist, Ken Saro-Wiwa, alongside eight others were executed by the Nigerian government for their nonviolent campaign against environmental degradation of the land and waters of Ogoniland, Niger Delta.',
          text: "This devastating incident provoked international outrage and resulted in Nigeria's suspension from the Commonwealth of Nations for over three years.",
          source: 'ConnectNigeria'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/fresh_start_fv0wlg.jpg',
          date: 'May 29, 1999',
          header: 'A fresh start for Nigeria’s Democracy',
          subheader:
            'Olusegun Obasanjo was elected as President, taking the baton from military ruler, General Abdulsalami Alhaji Abubakar.',
          text: 'This ushered in the fourth republic and a new constitution.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/Niger_Delta_Protest_oibsky.jpg',
          date: '2006',
          header: 'Niger Delta protests',
          subheader:
            'Residents of Niger Delta protested against oil companies exploiting their land without a substantial share of petroleum profits in return.',
          text: 'These protests, however, erupted into militant action that did not come to a halt till 2009.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Yaradua_crp1rx.jpg',
          date: 'May 5, 2010',
          header: 'The death of a President',
          subheader:
            "President Umaru Musa Yar'Adua died- from a natural cause while in office.",
          text: 'He was replaced by his Vice, Goodluck Jonathan.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543917/naija_media/chibok_w0rrm3.jpg',
          date: '2014',
          header: 'Chibok Girls',
          subheader:
            'Reportedly, 276 female students were kidnapped from Government Girls Secondary School at the town of Chibok, Bornu State, by Islamic terrorist group, Boko Haram. This sparked the #BringBackOurGirls Movement all over the world with calls for action by the Nigerian government.',
          text: 'Many of the girls have managed to escape or been released by the militant group in deal exchanges with the Nigerian government.  It’s been eight years since the kidnapping and at least 100 of the girls are still missing.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Opposition_win_aka2g8.jpg',
          date: 'March 2015',
          header: 'First opposition to win a presidential election',
          subheader:
            "Muhammadu Buhari won the presidential election, becoming the first opposition candidate to do so in Nigeria's history.",
          text: ' It was truly a feat as President Goodluck Jonathan served only one term before he was voted out.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Politics_darwhl.jpg',
          date: 'October 2020',
          header: '#EndSARS Protests',
          subheader:
            'The #EndSARS Protests broke out to demand the end of police brutality, extortion, harassment and extra-judicial killings perpetrated by the Special Anti-Robbery Squad (SARS). It was a decentralised movement that involved a series of mass protests spanning weeks in different parts of the country. The protests garnered international attention and support and about 28 million tweets bearing #EndSARS have been made on Twitter alone.',
          text: 'The most devastating incident during the protests, which is referred to as the Lekki Massacre occurred on 20th, October 2020 when the Nigerian army fired live bullets at unarmed protesters at the Lekki toll gate.',
          source: ''
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
      return 'We tell the story of Nigeria’s rocky political history since independence. '
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
    this.resetCursor()
  },

  methods: {
    resetCursor() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.add('dark-cyan')
      cursor.classList.remove('cta')
      cursor.classList.remove('link')
      text.classList.remove('show')
      text.textContent = ''
    }
  }
}
</script>

<style scoped>
.header-img.small.left {
  object-position: 80% 50%;
}
@media screen and (max-width: 479px) {
  .category-header.small {
    color: #74e779;
  }
}
</style>
