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
              <div>Cinema of Nigeria</div>
            </div>
            <div class="header-img__wrapper">
              <div class="storyline-subheader top">
                <div>1960</div>
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
                  After gaining independence, the cinema business rapidly
                  expanded, with new cinema houses being established.
                </div>
              </div>
            </div>
          </div>
          <div class="c-timeline__wrapper">
            <timeline
              v-for="(timeline, index) in timelines"
              :key="index"
              colors="green"
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

  data() {
    return {
      timelines: [
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1962',
          header: 'Latola Films',
          subheader: 'First and earliest film production company in Nigeria ',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327325/independence_media/IKDairo_qbvtfq.png',
          date: '1963',
          header: 'Membership of the Order of the British Empire',
          subheader:
            'Late I.K Dairo became the only African musician ever honoured by receiving membership of the Order of the British Empire.',
          text: 'An order of chivalry in the United Kingdom. He was perhaps the biggest African music act in the 60s.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '1972',
          header: 'Indigenization Decree',
          subheader:
            'The Indigenization Decree by Yakubu Gowon demanded the transfer of ownership of about a total of 300 film theatres from their foreign owners to Nigerians',
          text: 'Which resulted in more Nigerians playing active roles in the cinema and film.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: 'Aired from 1980',
          header: 'First TV sitcom in Nigeria',
          subheader:
            'New Masquerade, created and written by James Iroha and aired on Nigerian Television Network on Tuesday nights from 8:30 pm – 9:00 pm.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327315/independence_media/Living-in-Bondage_c3g3rv.jpg',
          date: '1992',
          header: 'Living in Bondage',
          subheader:
            'Directed by Chris Obi Rapu, and written by Kenneth Nnebue and Okechukwu Ogunjiofor.',
          text: 'It is regarded as the first Nigerian home video which achieved blockbuster success.'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664441910/independence_media/Fela_bobwcl.jpg',
          date: '1997',
          header: 'Fela Anikulapo Kuti dies',
          subheader:
            'The death of the pioneer of Afrobeat, Fela Anikulapo Kuti rocked the entire country.',
          text: 'Fela was a Pan-Africanist, political activist and perhaps the greatest performer Nigeria has had to date.'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327338/independence_media/AgbaniDarego_uv9zan.webp',
          date: '2001',
          header: 'First Black African To Be Crowned Miss World',
          subheader:
            "The entire world was captivated by Chief Ibiagbanidokibubo Asenite 'Agbani' Darego, MFR who was crowned the Miss World title, held in Puerto Rico, at the age of 19.",
          text: 'She remains the only Nigerian to hold that title ever since.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2003',
          header: 'MultiChoice launches Africa Magic',
          subheader:
            'This was a pivotal moment for filmmakers and the entire Nigerian movie industry as it was an answer to the difficulties faced with marketing and distribution of films.',
          text: ''
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2006',
          header: 'First Nigerian Music Awards',
          subheader:
            'The Headies Awards, formerly called Hip Hop World Awards is Nigeria’s pioneer music awards show established to recognize outstanding achievements in the Nigerian music industry.',
          text: 'Its first edition had winners such as P-Square, DJ Jimmy Jat and Keke Ogungbe.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2007',
          header: 'Comedy Concert holds for two days',
          subheader:
            'The turnout for the second edition of AY Live in concert was so huge, that Nigerian Comedian, AY had to hold the show for two days instead of the original one day it was slated for.',
          text: 'The event was held at the MUSON Center, Lagos.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2013',
          header: 'AMVCA first edition',
          subheader:
            'Africa Magic Viewers Choice Awards is perhaps the largest celebration of television and film in Africa.',
          text: 'Every year since inception, the awards show has held in Lagos, Nigeria.'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/olamide-OLIC_npyvrh.jpg',
          date: '2014 - 2016',
          header: 'OLIC Sells out for three consecutive years',
          subheader:
            'Popularly know as King of Rap, or the King of the streets, Olamide was the first Nigerian artiste to sell out the Eko Convention Center, for three consecutive years',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327317/independence_media/Tiwa-Savage_pptdbo.jpg',
          date: '2018',
          header: 'First Female MTV Best African Act',
          subheader:
            'Singer, songwriter and actress, Tiwa Savage was the first female musician to win the "Best African Act" award at the MTV Europe awards in Spain.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327325/independence_media/lady-buckit-1_x81tli.png',
          date: '2020',
          header: 'First feature-length animated movie',
          subheader:
            'Lady Buckit and the Motley Mopsters (LBMM) is Nigeria’s first feature-lenght animated movie and was directed by Adebisi Adetayo with an estimated budget of 400 million Naira.',
          text: 'In 2021, it won the Best Animation category at the Africa Movie Academy Awards.'
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2021',
          header: 'O2 Arena Sold out thrice',
          subheader:
            'Wizkid, one of the biggest acts in Africa, sold out the famous London O2 Arena, with a capacity of 20,000 people, three times in a row in November.',
          text: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/burna-boy-grammy-trophy_gxvnay.jpg',
          date: '2021',
          header: 'First Nigerian to win a Grammy',
          subheader:
            'Performing artist and musician, Burna Boy, popularly referred to as the African Giant, is the first Nigerian to be awarded a Grammy in the Best World Music Album category for his fifth studio album, Twice as Tall.',
          text: ''
        },
        {
          img: 'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
          date: '2022',
          header: 'Amazon Prime biopic',
          subheader:
            'Nwa Baby crooner, Flavour was the first African to receive $3m as an advance payment for his biopic on Amazon Prime ',
          text: ''
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
      return '#74e779'
    },

    title() {
      return 'Entertainment | The Naija Story'
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
  background: #74e779;
}

.storyline-header,
.category-header.small,
.storyline-subheader {
  color: black;
}
</style>
