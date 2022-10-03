<template>
  <div>
    <Nav />
    <div class="scroller">
      <div class="l-section">
        <div class="l-container">
          <div class="category-hero">
            <div class="category-header small">
              <div>Random Facts</div>
            </div>
            <div class="storyline-header">
              <div>First Skyscraper in Nigeria</div>
            </div>
            <div class="header-img__wrapper">
              <div class="storyline-subheader top">
                <div>1965</div>
              </div>
              <div class="header-img__block">
                <img
                  alt=""
                  class="header-img center"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543925/naija_media/Skyscraper_2_dq2qk3.png" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Skyscraper_3_ayrfti.png" />
              </div>
              <div class="storyline-subheader">
                <div>
                  West Africa's first-ever skyscraper was built in Dugbe
                  Business District Centre of Ibadan aka “Ilé Àwọn Àgbẹ̀.
                </div>
              </div>
            </div>
          </div>
          <div class="c-timeline__wrapper">
            <timeline
              v-for="(timeline, index) in timelines"
              :key="index"
              colors="black"
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
        category="Politics"
        img-center="https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg"
        img-left="https://res.cloudinary.com/deljrzv80/image/upload/v1664543922/naija_media/start_Biafran_war_f6bqut.jpg"
        img-right="https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Politics_darwhl.jpg"
        link="/politics"
        page="random">
        <template #description>
          We must warn you, it’s not exactly rosy.
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543928/naija_media/Right-Hand-Drive-Nigeria_sk4a8o.png',
          date: '1972',
          header: 'Switching to left hand drive from right hand drive',
          subheader:
            'To fully eradicate the vestiges of the British colonial rule, Nigeria switched from left hand drive to right-hand drive.',
          text: 'Posters and new road signs were put up to spread the word of this change.',
          source: 'HistoryVille'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Ghana_must_go_uqn9mw.png',
          date: '1983',
          header: 'Ghana Must Go',
          subheader:
            'Following an executive order by General Shehu Shagari, undocumented immigrants were forced to leave the country or face arrest. Many West Africans were displaced, but most significantly, Ghanaians.',
          text: 'The vestiges of this movement is ever present by the cheap matted woven zipped bags, used by the migrants to move their belongings and popularly called, Ghana Must Go.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/Nobel_prize_loglzj.png',
          date: '1986',
          header: 'First African Recipient of the Nobel Prize',
          subheader:
            'The first African to be awarded the prestigious Nobel Prize was writer and activist, Wole Soyinka.',
          text: 'He was awarded a Nobel Prize in Literature and was described as someone "who in a wide cultural perspective and with poetic overtones fashions the drama of existence."',
          source: 'Nairaland'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Asuu_Strike_s9prab.png',
          date: '1988',
          header: 'ASUU embarks on first-ever strike',
          subheader:
            'The Academic Staff Union of Universities embarked on a nationwide strike to demand fair wages and other benefits for its workers.',
          text: 'The union was, however, proscribed and not allowed to resume operation till 1990. The union has embarked on many other strike actions ever since.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/longest_bridge_vrzwat.png',
          date: '1990',
          header: 'Longest Bridge in Nigeria',
          subheader:
            'The third mainland bridge is the longest bridge in Nigeria. It is 11.8 km long and the 2nd longest bridge in Africa. ',
          text: '',
          source: 'Vanguard NG'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/Aliko_Dangote_at7uon.png',
          date: '2011',
          header: 'Africa’s Richest Man',
          subheader:
            'In 2011, Aliko Dangote was named the richest man in Africa and the richest black man in the world.',
          text: 'He has been holding this position for eleven consecutive years now, with an estimated worth of $13 billion dollars.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543928/naija_media/Largest_economy_cueqli.png',
          date: '2013',
          header: 'Nigeria became Africa’s largest economy',
          subheader:
            'This might be hard to believe because in 2018, Nigeria was described as the world’s poverty capital. However, in 2014,  due to the Nigeria’s GDP rebasing by the National Burueau of Statistics.',
          text: 'Nigeria was indeed the giant of Africa, not just in population, but in the prosperity of its economy.',
          source: 'WeForum'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543929/naija_media/canopy_walk_zndvmt.png',
          date: '2015',
          header: 'Canopy Walk is launched',
          subheader:
            "The Canopy Walkway in Lekki Conservation Centre in Lagos State, Nigeria is 401 metres long and Africa's second-longest canopy walk.",
          text: '',
          source: 'AllAroundAfrica'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543929/naija_media/anetocin_dxixkl.png',
          date: '2022',
          header: 'Anietocin is invented',
          subheader:
            'A Nigerian scientist, Prof. Dr. Ugochukwu Anieto, invented a new antibiotic medication called Anietocin, to treat drug-resistant infections.',
          text: 'The medication is named after his family.',
          source: 'today.tamu.edu'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/best_in_maths_en4vtc.png',
          date: '2022',
          header: 'World’s Best Mathematics Student',
          subheader:
            "Faith Odunsi emerged at the Global Mathematics Competition, becoming the World's Best Mathematics student.",
          text: 'This Maths prodigy received a Record Holder Award in 2018 for the highest number of questions answered on Cowbellpedia.',
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
      return 'Top random Facts in Nigeria’s history. '
    },

    theme() {
      return '#000000'
    },

    title() {
      return 'Random Facts | The Naija Story'
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
      cursor.classList.add('black')
      cursor.classList.remove('cta')
      cursor.classList.remove('link')
      text.classList.remove('show')
      text.textContent = ''
    }
  }
}
</script>

<style scoped>
.l-section,
.l-section.footer {
  background: black;
}

.storyline-header {
  color: #bde7be;
}
.storyline-subheader {
  color: white;
}

.category-header.small {
  color: #74e779;
  border-color: #57867d;
}
</style>
