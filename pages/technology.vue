<template>
  <div>
    <Nav inverse />
    <div class="scroller">
      <div class="l-section">
        <div class="l-container">
          <div class="category-hero">
            <div class="category-header small">
              <div>Technology</div>
            </div>
            <div class="storyline-header">
              <div>First Computer Centre</div>
            </div>
            <div class="header-img__wrapper">
              <div class="storyline-subheader top">
                <div>1963</div>
              </div>
              <div class="header-img__block">
                <img
                  alt=""
                  class="header-img center"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664614918/naija_media/IBM_ud56af_jeaeg8.jpg" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664614919/naija_media/IBM-2_uypwix_n4lflz.jpg" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664614917/naija_media/IBM-3_gun4ha_yiuqza.jpg" />
              </div>
              <div class="storyline-subheader">
                <div>
                  IBM African Education Centre was set up at University College,
                  Ibadan (renamed University of Ibadan Computing Centre in
                  1966).
                </div>
              </div>
            </div>
          </div>
          <div class="c-timeline__wrapper">
            <timeline
              v-for="(timeline, index) in timelines"
              :key="index"
              colors="white"
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
        category="Random Facts"
        img-center="https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png"
        img-left="https://res.cloudinary.com/deljrzv80/image/upload/v1664543928/naija_media/Right-Hand-Drive-Nigeria_sk4a8o.png"
        img-right="https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Ghana_must_go_uqn9mw.png"
        link="/random"
        page="tech">
        <template #description>
          From the history of buildings to the first Nigerian to win the Nobel
          Prize, these are some facts we think you should know
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/computer_science_sgvh0i.jpg',
          date: '1972',
          header: 'Computer Science course in Nigerian Universities',
          subheader:
            'Computer Science courses instituted at the University of Lagos, University of Ife, and University of Ibadan.',
          text: '',
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543950/naija_media/Census_nqcdau.jpg',
          date: '1973',
          header: 'Computers used in National Census exercise',
          subheader:
            'For the first time in Nigeria, computers were used in the National Census exercise.',
          text: '',
          source: 'legit.ng'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/COAN_i2d3fu.jpg',
          date: '1978',
          header: 'COAN was inaugurated',
          subheader:
            'The Computer Association of Nigeria, now Nigeria Computer Society (NCS) is the umbrella organisation of all Information Technology Professionals, Interest Groups and Stakeholders in Nigeria.',
          text: 'It transformed into NCS in 2002 as a result of harmonisation with other stakeholders and interest group.',
          source: 'techeconomy.ng'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543947/naija_media/Nigerian_bank_mhdxkl.jpg',
          date: '1982',
          header: 'Leaving the folders for screens',
          subheader:
            'Computerization in the Nigerian banking industry was introduced first in the 1980s by Society General Bank (Nigeria) Limited.',
          text: 'Until the mid-1990s few banks that were computerized adopted the Local Area Network (LAN) within the bank branches.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543948/naija_media/supercomputer_fdpkd5.jpg',
          date: '1989',
          header: 'Inventing a supercomputer',
          subheader:
            'Nigerian-born computer scientist Philip Emeagwali designed the program and formula for the fastest computer on earth at that time, the Connection Machine.',
          text: 'Utilising the connection machine and 65,536 microprocessors to achieve 3.1 billion calculations per second, the fastest computational record at the time.',
          source: 'howng.com'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/NITEL_x6uln1.jpg',
          date: '1985',
          header: 'NITEL communications was created',
          subheader:
            'Nigerian Telecommunications was a monopoly telephone service provider in Nigeria until 1992 when the Nigerian government enacted the Nigerian Communications Commission act allowing new entrants into the telecommunications sector.',
          text: 'NITEL is infamous for its abysmal service.',
          source: 'trendsmap.com'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/birth_phones_bpitse.jpg',
          date: '2001',
          header: 'The birth of mobile phones and mobile internet',
          subheader:
            'The Nigerian Communications Services awarded licences to operate to Econet (now Airtel) and MTN in August.',
          text: 'This was a turning point for communication systems and accessibility in Nigeria.',
          source: 'Guardian NG'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/Mainone_ocns1n.jpg',
          date: '2010',
          header: 'MainOne Launch in West Africa',
          subheader:
            'The submarine communications cable stretching from Portugal to South Africa added Nigeria along its route.',
          text: 'This positively impacted the quality of internet connection available in the country.',
          source: 'msmeafricaonline.com'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543949/naija_media/Andela_tm9ts1.jpg',
          date: '2014',
          header: 'Andela launches in Lagos',
          subheader:
            'The tech talent ecosystem and community came to Nigeria, paving the way for international opportunities and exposure for Nigerian tech.',
          text: '',
          source: 'CurrentSchoolNews'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543948/naija_media/paystack_w6vtc3.jpg',
          date: '2020',
          header: 'Paystack acquisition by Stripe',
          subheader:
            'Founded in 2015 by Shola Akinlade and Ezra Olubi, Paystack was one of the first Nigerian startups to get into US-based seed accelerator, Y Combinator.',
          text: 'The payments platform was acquired by Stripe for over $200 million.',
          source: 'Brent Franson'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/interswitch_bfqaiy.jpg',
          date: '2019',
          header: 'First Nigerian Unicorn',
          subheader:
            'Nigerian digital payments company, Interswitch became Nigeria’s first unicorn and Africa’s second ever unicorn.',
          text: '',
          source: 'Nairametrics'
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
      return 'The tech scene currently serves as a glimmer of hope for many Nigerians and here are a few milestones since independence'
    },

    theme() {
      return '#ffffff'
    },

    title() {
      return 'Technology | The Naija Story'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    setTimeout(() => {
      this.$timelineParagraph()
    }, 500)
  }
}
</script>

<style scoped>
.l-section,
.l-section.footer {
  background: white;
}

.storyline-header {
  color: #74e779;
}
.storyline-subheader {
  color: black;
}

.header-img.small {
  filter: grayscale(100%);
}
.header-img.small.left {
  object-position: 70% 50%;
}

.category-header.small {
  border-color: #57867d;
  color: #74e779;
}
</style>
