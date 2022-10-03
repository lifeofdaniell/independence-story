<template>
  <div>
    <Nav inverse />
    <div class="scroller">
      <div class="l-section">
        <div class="l-container">
          <div class="category-hero">
            <div class="category-header small">
              <div>Sports</div>
            </div>
            <div class="storyline-header">
              <div>First Olympic medal</div>
            </div>
            <div class="header-img__wrapper">
              <div class="storyline-subheader top">
                <div>1964</div>
              </div>
              <div class="header-img__block">
                <img
                  alt=""
                  class="header-img center"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543936/naija_media/Nojim_Maiyegun_bxmydd.jpg" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/Nojim-2_w1ovqf.jpg" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/nojim_cjdxu1.jpg" />
              </div>
              <div class="storyline-subheader">
                <div>
                  Nojim Maiyegun won a bronze medal men's Light Middleweight (71
                  kg) category at the 1964 Summer Olympics in Tokyo, Japan.
                </div>
              </div>
            </div>
          </div>
          <div class="c-timeline__wrapper">
            <timeline
              v-for="(timeline, index) in timelines"
              :key="index"
              colors="pastel-green"
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
        category="Tech"
        img-center="https://res.cloudinary.com/deljrzv80/image/upload/v1664543948/naija_media/paystack_w6vtc3.jpg"
        img-left="https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/birth_phones_bpitse.jpg"
        img-right="https://res.cloudinary.com/deljrzv80/image/upload/v1664543950/naija_media/Census_nqcdau.jpg"
        link="/technology"
        page="sports">
        <template #description>
          Tech has become a glimmer of hope amidst many failing systems. Nigeria
          currently houses some of the biggest tech leaders in Africa. Let’s
          take a look at the journey so far.
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543942/naija_media/cup_of_nations_z0ugrk.jpg',
          date: '1980',
          header: 'First African Cup of Nations Title',
          subheader:
            'On March 22nd 1980, Segun Odegbami scored twice to win the then Green Eagles their first ever African Cup of Nations title.',
          text: '',
          source: 'Brila'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543938/naija_media/wimbeldon_cwuic1.jpg',
          date: '1983',
          header: 'Fourth Round at Wimbledon',
          subheader:
            'Nduka Odizor, was the first and remains the only Nigerian player to get to the fourth round at the Wimbledon.',
          text: '',
          source: 'Skabash'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/Golden_Eaglets_rimtgw.jpg',
          date: '1985',
          header: 'We arrived',
          subheader:
            'The Golden Eaglets (our U-17 national football team) won the first-ever FIFA U-17 Championship held in China.',
          text: '',
          source: 'ACLSports'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543939/naija_media/cruiseweight_pchwsp.jpg',
          date: '1985',
          header: 'World Cruiserweight Champion',
          subheader:
            'Bash Ali made history as the first Cruiserweight Boxing champion from the African continent.',
          text: '',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543936/naija_media/loss_of_a_star_bux0up.jpg',
          date: '1989',
          header: 'Nigeria loses a star',
          subheader:
            'A rather devastating occurrence:  Rising Star, Samuel Okwaraji died due to heart failure in the 1990 FIFA World Cup Qualifier match against Angola.',
          text: 'He is said to have literally played his heart for Nigeria.',
          source: 'PunchNG'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543936/naija_media/Rashidi_Yekini_zged2h.jpg',
          date: '1993',
          header: 'Africa’s best',
          subheader:
            'Late Rashidi Yekini was the first Nigerian footballer to be named African Footballer of the Year after scoring 34 goals in 32 games.',
          text: '',
          source: 'Playmakerstats'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/first_goal_row6tl.jpg',
          date: '1994',
          header: 'Our First World Cup Goal',
          subheader:
            'At the World Cup in USA the following year, reigning African Footballer of the Year Rashidi Yekini scored Nigeria’s first ever goal against Bulgaria.',
          text: '',
          source: 'AP'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/Fifa_Ranking_oljt0o.jpg',
          date: '1994',
          header: 'Super Eagles attain top 5 FIFA ranking',
          subheader:
            'The Super Eagles were ranked fifth globally by FIFA and number one in Africa! It remains our highest ranking so far.',
          text: '',
          source: 'ConnectNigeria'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/first_gold_medal_pbjcvu.jpg',
          date: '1996',
          header: 'First Olympic Gold Medals',
          subheader:
            'The Nigerian Men’s Football team proudly tagged The Dream Team defeated Argentina to win Africa’s first olympic gold medal in football.',
          text: 'Chioma Ajunwa won the first-ever gold medal for Nigeria in the Long jump category at the Olympics, Atlanta.',
          source: 'Olympics.com'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Samuel_Peter_r0dpsc.jpg',
          date: '2008',
          header: 'World Heavyweight Boxing Champion',
          subheader:
            'Samuel Okon Peter is the first Nigerian to hold the WBC Heavyweight Title.',
          text: 'He was ranked by The Ring among the ten best heavyweights from 2005 to 2008, reaching his highest ranking of world No.2 in 2007.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543938/naija_media/world_record_twice_a6qsln.jpg',
          date: '2016',
          header: 'Breaking World records, TWICE',
          subheader:
            'Late Paul Kehinde broke the men’s 65kg World Record twice ( with lifts of 218kg and 220kg)  at the Paralympics in Rio.',
          text: '',
          source: 'SportsBrief'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Bobsled_Team_d5jltj.jpg',
          date: '2018',
          header: 'Africa’s first ever bobsled team',
          subheader:
            'Established by Seun Adigun in 2016, this self-funding female team represented Nigeria at the Winter Olympics held in Pyeongchang, South Korea.',
          text: 'They are the first ever Nigerians to participate in the Winter Olympics.',
          source: 'Getty Images'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543933/naija_media/Asisat_Oshoala_jqc9sd.jpg',
          date: '2022',
          header: 'Ballon D’Or Nomination',
          subheader:
            'Super Falcons striker, Asisat Lamina Oshoala got nominated for the 2022 Ballon dór Feminine player of the year following her impressive season with Fc Barcelona Femini in the Spanish League.',
          text: 'She also holds the record for most African Women’s Footballer of the Year awards, winning it five times.',
          source: 'Vanguard NG'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/ITTF_z5fnao.jpg',
          date: '2022',
          header: 'ITTF TOP 10 Player',
          subheader:
            'Quadri Aruna was named Star player of the year by the ITTF a few years ago and has only advanced ever since.',
          text: 'He is the first African and black player to be ranked in the top 10 in world table tennis ranking. This Nigerian is currently ranked number 10 globally and number 1 in Africa.',
          source: 'ChannelsTV'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Tobi_Amusan_vpplpp.jpg',
          date: '2022',
          header: 'World Athletics Championships glory',
          subheader:
            'Tobi Amusan entered the 2022 World Athletics Championships as a medal contender. In the heats she ran an African record of 12.40s, but then in the semifinal, she set a new world record of 12.12s.',
          text: 'Then she went on to best her time once again in the final, running 12.06s (2.5m/s wind assisted), becoming the first Nigerian world champion at the World Athletics Championships.',
          source: 'Getty Images'
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
      return 'A chronicle of some of the medals and recognition Nigeria has attained in the sports sector since 1960. '
    },

    theme() {
      return '#bde7be'
    },

    title() {
      return 'Sports | The Naija Story'
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
      cursor.classList.add('pastel-green')
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
  background: #bde7be;
}

.storyline-subheader {
  color: black;
}
.storyline-header {
  color: #57867d;
}

.category-header.small {
  color: black;
  border-color: #57867d;
}
</style>
