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
              <template #timeline-subtext>
                {{ timeline.text }}
              </template>
            </timeline>
          </div>
        </div>
      </div>
      <next-section
        category="Tech"
        img-center="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-left="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        img-right="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327330/independence_media/FirstAFCON_su81is.jpg',
          date: '1980',
          header: 'First African Cup of Nations Title',
          subheader:
            'On March 22nd 1980, Segun Odegbami scored twice to win the then Green Eagles their first ever African Cup of Nations title.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327331/independence_media/WimbledonFirstRound_z6gz1f.webp',
          date: '1983',
          header: 'Fourth Round at Wimbledon',
          subheader:
            'Nduka Odizor, was the first and remains the only Nigerian player to get to the fourth round at the Wimbledon.',
          text: ''
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1985',
          header: 'We arrived',
          subheader:
            'The Golden Eaglets (our U-17 national football team) won the first-ever FIFA U-17 Championship held in China.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327317/independence_media/bashali_n0guxl.jpg',
          date: '1985',
          header: 'World Cruiserweight Champion',
          subheader:
            'Bash Ali made history as the first Cruiserweight Boxing champion from the African continent.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327320/independence_media/okwaraji-carried-out-of-pitch_iyr6q7.jpg',
          date: '1989',
          header: 'Nigeria loses a star',
          subheader:
            'A rather devastating occurrence:  Rising Star, Samuel Okwaraji died due to heart failure in the 1990 FIFA World Cup Qualifier match against Angola.',
          text: 'He is said to have literally played his heart for Nigeria.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1993',
          header: 'Africa’s best',
          subheader:
            'Late Rashidi Yekini was the first Nigerian footballer to be named African Footballer of the Year after scoring 34 goals in 32 games.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327333/independence_media/FirstWorldCupGoal_mioye3.webp',
          date: '1994',
          header: 'Our First World Cup Goal',
          subheader:
            'At the World Cup in USA the following year, reigning African Footballer of the Year Rashidi Yekini scored Nigeria’s first ever goal against Bulgaria.',
          text: ''
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1994',
          header: 'Super Eagles attain top 5 FIFA ranking',
          subheader:
            'The Super Eagles were ranked fifth globally by FIFA and number one in Africa! It remains our highest ranking so far.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327329/independence_media/OlympicGoldFootball_cy9ido.webp',
          date: '1996',
          header: 'First Olympic Gold Medals',
          subheader:
            'The Nigerian Men’s Football team proudly tagged The Dream Team defeated Argentina to win Africa’s first olympic gold medal in football.',
          text: 'Chioma Ajunwa won the first-ever gold medal for Nigeria in the Long jump category at the Olympics, Atlanta.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2008',
          header: 'World Heavyweight Boxing Champion',
          subheader:
            'Samuel Okon Peter is the first Nigerian to hold the WBC Heavyweight Title.',
          text: 'He was ranked by The Ring among the ten best heavyweights from 2005 to 2008, reaching his highest ranking of world No.2 in 2007.'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327327/independence_media/PaulKehindeGold_jehixs.jpg',
          date: '2016',
          header: 'Breaking World records, TWICE',
          subheader:
            'Late Paul Kehinde broke the men’s 65kg World Record twice ( with lifts of 218kg and 220kg)  at the Paralympics in Rio.',
          text: ''
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2018',
          header: 'Africa’s first ever bobsled team',
          subheader:
            'Established by Seun Adigun in 2016, this self-funding female team represented Nigeria at the Winter Olympics held in Pyeongchang, South Korea.',
          text: 'They are the first ever Nigerians to participate in the Winter Olympics.'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327330/independence_media/QuadriArunaITF_psdox3.png',
          date: '2022',
          header: 'ITTF TOP 10 Player',
          subheader:
            'In 2014, Quadri Aruna was named Star player of the year by the ITTF and has only advanced ever since.',
          text: 'He is the first African and black player to be ranked in the top 10 in world table tennis ranking. This Nigerian is currently ranked number 10 globally and number 1 in Africa.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2008',
          header: 'World Athletics Championships glory',
          subheader:
            'Tobi Amusan entered the 2022 World Athletics Championships as a medal contender. In the heats she ran an African record of 12.40s, but then in the semifinal, she set a new world record of 12.12s.',
          text: 'Then she went on to best her time once again in the final, running 12.06s (2.5m/s wind assisted), becoming the first Nigerian world champion at the World Athletics Championships.'
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
