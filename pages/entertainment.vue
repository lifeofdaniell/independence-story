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
              <div>Membership of the Order of the British Empire</div>
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
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/membership_british_zok2sr.jpg" />
                <img
                  alt=""
                  class="header-img small left"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664661686/naija_media/I.K.-Dairo-front_di4pkk.jpg" />
                <img
                  alt=""
                  class="header-img small right"
                  loading="lazy"
                  src="https://res.cloudinary.com/deljrzv80/image/upload/v1664661631/naija_media/I_K_Dairo_jyqq5l.jpg" />
              </div>
              <div class="storyline-subheader">
                <div>
                  Late I.K Dairo became the only African musician ever honoured
                  by receiving membership of the Order of the British Empire.
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
        category="Sports"
        img-center="https://res.cloudinary.com/deljrzv80/image/upload/v1664543936/naija_media/Nojim_Maiyegun_bxmydd.jpg"
        img-left="https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/Nojim-2_w1ovqf.jpg"
        img-right="https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/nojim_cjdxu1.jpg"
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
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664588365/naija_media/casino-cinema_afhcpb.jpg',
          date: '1972',
          header: 'Indigenization Decree',
          subheader:
            'The Indigenization Decree by Yakubu Gowon demanded the transfer of ownership of about a total of 300 film theatres from their foreign owners to Nigerians',
          text: 'Which resulted in more Nigerians playing active roles in the cinema and film.',
          source: 'yabacity.com'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664588142/naija_media/new-masquerade_cvtfer.jpg',
          date: 'Aired from 1980',
          header: 'First TV sitcom in Nigeria',
          subheader:
            'New Masquerade, created and written by James Iroha and aired on Nigerian Television Network on Tuesday nights from 8:30 pm – 9:00 pm.',
          text: '',
          source: 'Facebook'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/living_in_bondage_ezbla6.jpg',
          date: '1992',
          header: 'Living in Bondage',
          subheader:
            'Directed by Chris Obi Rapu, and written by Kenneth Nnebue and Okechukwu Ogunjiofor.',
          text: 'It is regarded as the first Nigerian home video which achieved blockbuster success.',
          source: 'Google'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Fela_idxfwi.jpg',
          date: '1997',
          header: 'Fela Anikulapo Kuti dies',
          subheader:
            'The death of the pioneer of Afrobeat, Fela Anikulapo Kuti rocked the entire country.',
          text: 'Fela was a Pan-Africanist, political activist and perhaps the greatest performer Nigeria has had to date.',
          source: 'Genius'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543914/naija_media/miss_world_vg6eaw.jpg',
          date: '2001',
          header: 'First Black African To Be Crowned Miss World',
          subheader:
            "The entire world was captivated by Chief Ibiagbanidokibubo Asenite 'Agbani' Darego, MFR who was crowned the Miss World title, held in Puerto Rico, at the age of 19.",
          text: 'She remains the only Nigerian to hold that title ever since.',
          source: 'Google'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664587500/naija_media/africa-magic_ghpnc1.jpg',
          date: '2003',
          header: 'MultiChoice launches Africa Magic',
          subheader:
            'This was a pivotal moment for filmmakers and the entire Nigerian movie industry as it was an answer to the difficulties faced with marketing and distribution of films.',
          text: '',
          source: 'Google'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664586793/naija_media/Headies-award_ykpcp1.jpg',
          date: '2006',
          header: 'First Nigerian Music Awards',
          subheader:
            'The Headies Awards, formerly called Hip Hop World Awards is Nigeria’s pioneer music awards show established to recognize outstanding achievements in the Nigerian music industry.',
          text: 'Its first edition had winners such as P-Square, DJ Jimmy Jat and Keke Ogungbe.',
          source: 'Google'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664586615/naija_media/amvca_rfjcgp.jpg',
          date: '2013',
          header: 'AMVCA first edition',
          subheader:
            'Africa Magic Viewers Choice Awards is perhaps the largest celebration of television and film in Africa.',
          text: 'Every year since inception, the awards show has held in Lagos, Nigeria.',
          source: 'Google'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543906/naija_media/OLIC_wtm84d.jpg',
          date: '2014 - 2016',
          header: 'OLIC Sells out for three consecutive years',
          subheader:
            'Popularly know as King of Rap, or the King of the streets, Olamide was the first Nigerian artiste to sell out the Eko Convention Center, for three consecutive years',
          text: '',
          source: 'Guardian NG'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543947/naija_media/netflix_dm8fox.jpg',
          date: '2016',
          header: 'Netflix and Chill Comes to Nigeria',
          subheader:
            'In it’s expansion efforts to 130 countries in 2016, Netflix launched in Nigeria.',
          text: 'Fifty, a film directed by the late Biyi Bandele, was one of the first Nigerian films streamed on the platform.',
          source: 'Netflix'
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/First_mtv_female_hsslaf.jpg',
          date: '2018',
          header: 'First Female MTV Best African Act',
          subheader:
            'Singer, songwriter and actress, Tiwa Savage was the first female musician to win the "Best African Act" award at the MTV Europe awards in Spain.',
          text: '',
          source: 'Wikipedia'
        },

        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Animated_hpykai.jpg',
          date: '2020',
          header: 'First feature-length animated movie',
          subheader:
            'Lady Buckit and the Motley Mopsters (LBMM) is Nigeria’s first feature-lenght animated movie and was directed by Adebisi Adetayo with an estimated budget of 400 million Naira.',
          text: 'In 2021, it won the Best Animation category at the Africa Movie Academy Awards.',
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/wizkid_O2_g0dtzg.jpg',
          date: '2021',
          header: 'O2 Arena Sold out thrice',
          subheader:
            'Wizkid, one of the biggest acts in Africa, sold out the famous London O2 Arena, with a capacity of 20,000 people, three times in a row in November.',
          text: '',
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/burna_syrqyl.jpg',
          date: '2021',
          header: 'First Nigerian Solo Artist to win a Grammy',
          subheader:
            'Performing artist and musician, Burna Boy, popularly referred to as the African Giant, is the first Nigerian to be awarded a Grammy in the Best World Music Album category for his fifth studio album, Twice as Tall.',
          text: '',
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/ckay_iyivwy.jpg',
          date: '2021',
          header: 'Two Years on the Billboard Top 100 and 200',
          subheader:
            "Everyone knows Nigerians are killing it in the music industry. Regardless, it was still a surprise when 'Essence (Wizkid Ft. Tems)' crossed the ocean and settled on the Billboard 100 in 2020",
          text: "'Love Nwatiti' followed the next year. CKay’s sleeper hit is also the most certified afrobeat song!",
          source: ''
        },
        {
          img: 'https://res.cloudinary.com/deljrzv80/image/upload/v1664587260/naija_media/flavour_qklay7.png',
          date: '2022',
          header: 'Amazon Prime biopic',
          subheader:
            'Nwa Baby crooner, Flavour was the first African to receive $3m as an advance payment for his biopic on Amazon Prime ',
          text: '',
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
      return 'The biggest achievements in the Nigerian Entertainment Industry since 1960; Music and Movies '
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
    }, 100)
    this.resetCursor()
  },

  methods: {
    resetCursor() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.add('green')
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
  background: #74e779;
}

.storyline-header,
.category-header.small,
.storyline-subheader {
  color: black;
}

@media screen and (min-width: 992px) {
  .storyline-header {
    font-size: 48px;
    line-height: 55px;
  }
}
</style>
