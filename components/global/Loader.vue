<template>
  <div class="c-loader" @mouseenter="cursorIn" @mouseleave="cursorOut">
    <div class="c-loader__inner">
      <h4 class="no-margin">
        Where it all started
      </h4>
      <div class="year-wrapper">
        <div class="loader-year" data-year>
          <b> 1960 </b>
        </div>
        <!--      <div class="loader-year" data-current>
          2022
        </div> -->
      </div>
      <div class="loader-progress__bar">
        <div class="loader-progress__fill"></div>
      </div>
    </div>
    <div class="c-loader__period">
      <h4 class="no-margin">
        1960-2022
      </h4>
    </div>
    <div class="letter-bg load">
      <div class="n-letter fall">
        N
      </div>
      <div class="i-letter one fall">
        I
      </div>
      <div class="g-letter fall">
        G
      </div>
      <div class="e-letter fall">
        E
      </div>
      <div class="r-letter fall">
        R
      </div>
      <div class="i-letter two fall">
        I
      </div>
      <div class="a-letter fall">
        A
      </div>
    </div>
    <div class="loader-gradient"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      imagesLoaded: 0,
      totalImages: 0,
      percent: 0,
      img: [
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664661686/naija_media/I.K.-Dairo-front_di4pkk.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664661631/naija_media/I_K_Dairo_jyqq5l.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664614919/naija_media/IBM-2_uypwix_n4lflz.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664614918/naija_media/IBM_ud56af_jeaeg8.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664614917/naija_media/IBM-3_gun4ha_yiuqza.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664588860/naija_media/abu_qcpnu3.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664588365/naija_media/casino-cinema_afhcpb.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664588142/naija_media/new-masquerade_cvtfer.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664587500/naija_media/africa-magic_ghpnc1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664587260/naija_media/flavour_qklay7.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664586793/naija_media/Headies-award_ykpcp1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664586615/naija_media/amvca_rfjcgp.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/Nojim-2_w1ovqf.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664585992/naija_media/nojim_cjdxu1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543950/naija_media/Census_nqcdau.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543949/naija_media/Andela_tm9ts1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543948/naija_media/paystack_w6vtc3.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543948/naija_media/supercomputer_fdpkd5.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543947/naija_media/Nigerian_bank_mhdxkl.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543947/naija_media/netflix_dm8fox.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/first_gold_medal_n8kun3.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/NITEL_x6uln1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/Mainone_ocns1n.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543946/naija_media/birth_phones_bpitse.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543945/naija_media/mainone_launch_y13bi5.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/interswitch_bfqaiy.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/computer_science_sgvh0i.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543944/naija_media/COAN_i2d3fu.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543942/naija_media/cup_of_nations_z0ugrk.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543939/naija_media/cruiseweight_pchwsp.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543938/naija_media/world_record_twice_a6qsln.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543938/naija_media/wimbeldon_cwuic1.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Bobsled_Team_d5jltj.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Samuel_Peter_r0dpsc.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543937/naija_media/Tobi_Amusan_vpplpp.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/ITTF_z5fnao.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543935/naija_media/Fifa_Ranking_oljt0o.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/first_goal_row6tl.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543934/naija_media/Golden_Eaglets_rimtgw.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543933/naija_media/Asisat_Oshoala_jqc9sd.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/Nobel_prize_loglzj.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/longest_bridge_vrzwat.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543930/naija_media/Aliko_Dangote_at7uon.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543929/naija_media/anetocin_dxixkl.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543929/naija_media/canopy_walk_zndvmt.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543928/naija_media/Largest_economy_cueqli.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543928/naija_media/Right-Hand-Drive-Nigeria_sk4a8o.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Ghana_must_go_uqn9mw.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543927/naija_media/Skyscraper_3_ayrfti.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Asuu_Strike_s9prab.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/best_in_maths_en4vtc.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543926/naija_media/Skyscraper_1_wugfgm.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543925/naija_media/Skyscraper_2_dq2qk3.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543922/naija_media/annulled_election_euhnbw.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543922/naija_media/start_Biafran_war_f6bqut.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Yaradua_crp1rx.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Opposition_win_aka2g8.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Return_to_civilian_rule_bvgspj.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543921/naija_media/Politics_darwhl.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/ogoni_nine_igxoe8.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/fresh_start_fv0wlg.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543920/naija_media/Niger_Delta_Protest_oibsky.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_1_ly27cr.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/first_republic_nghfin.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_3_xjeff3.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543919/naija_media/independence_2_s99ot9.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/end_Biafran_war_fedjnc.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543917/naija_media/chibok_w0rrm3.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/Civil_War_ends_quhymn.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543918/naija_media/first_military_coup_ohkem8.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543914/naija_media/miss_world_vg6eaw.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/wizkid_O2_g0dtzg.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/wiz_and_tems_etvc9g.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543907/naija_media/membership_british_zok2sr.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543906/naija_media/OLIC_wtm84d.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/burna_syrqyl.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/living_in_bondage_ezbla6.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Fela_idxfwi.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/Animated_hpykai.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/First_mtv_female_hsslaf.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664543905/naija_media/ckay_iyivwy.jpg'
      ]
    }
  },

  mounted() {
    this.loadingAnimation()
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
    setTimeout(() => {
      this.preloadImages(this.img)
    }, 7500)
  },

  methods: {
    loadingAnimation() {
      this.$gsap.to('.letter-bg.load', {
        delay: 1,
        autoAlpha: 1,
        duration: 1.5
      })
      this.$gsap.to(
        '.letter-bg.load',
        {
          delay: 1,
          bottom: '0%',
          fontSize: '23vw',
          lineHeight: '24vw',
          duration: 3,
          ease: 'bounce.out'
        },
        '>'
      )
      this.$gsap.to(
        '.n-letter.fall',
        {
          translateX: '-5vw',
          translateY: '0vw',
          rotate: -28,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.i-letter.one.fall',
        {
          translateX: '-2vw',
          translateY: '-1vw',
          rotate: -28,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.g-letter.fall',
        {
          translateX: '-3vw',
          translateY: '-1vw',
          rotate: 24,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.e-letter.fall',
        {
          translateX: '2vw',
          translateY: '0vw',
          rotate: -21,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.r-letter.fall',
        {
          translateX: '2vw',
          translateY: '1vw',
          rotate: 18,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.i-letter.two.fall',
        {
          translateX: '9vw',
          translateY: '-1vw',
          rotate: -28,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.a-letter.fall',
        {
          translateX: '8vw',
          translateY: '0vw',
          rotate: 11,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.to(
        '.c-loader__inner',
        {
          autoAlpha: 1,
          duration: 1
        },
        '<+3.5'
      )
    },

    preloadImages(imageArray, index) {
      this.totalImages = this.img.length
      index = index || 0
      if (imageArray && imageArray.length > index) {
        const img = new Image()
        img.onload = () => {
          this.imgLoaded()
          this.preloadImages(imageArray, index + 1)
        }
        img.src = imageArray[index]
      }
    },

    imgLoaded() {
      this.imagesLoaded += 1
      this.percent = ((100 / this.totalImages) * this.imagesLoaded - 1) << 0
      document.querySelector(
        '.loader-progress__fill'
      ).style.width = `${this.percent}%`
      if (this.imagesLoaded === this.totalImages) {
        document.querySelector('.loader-progress__fill').style.width = '100%'
        return this.doneLoading()
      }
    },

    doneLoading() {
      /*  const first = document.querySelector('[data-year]')
      const firstYear = this.$splittext({ target: first })
      const letters = firstYear[0].chars
      const second = document.querySelector('[data-current]')
      const currentYear = this.$splittext({ target: second })
      const secondLetters = currentYear[0].chars
      const tl = this.$gsap.timeline({})
          tl.to(letters, {
        delay: 1.5,
        yPercent: -100,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.1
      })
      tl.set(
        '[data-current]',
        {
          overflow: 'visible'
        },
        '<'
      )
      tl.to(
        secondLetters,
        {
          y: this.isMobile ? -100 : -190,
          duration: 1,
          ease: 'power3.outIn',
          stagger: 0.1
        },
        '<+0.25'
      ) */
      const year = document.querySelector('[data-year] > b')
      this.$gsap.to(year, {
        textContent: 2022,
        duration: 7,
        ease: 'power1.inOut',
        snap: {
          textContent: 1
        }
      })
      setTimeout(() => {
        this.$store.commit('toggleLoading', false)
      }, 7500)
    },

    checkDevice() {
      if (window.innerWidth <= 767) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },

    cursorIn() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.add('cta')
      text.textContent = 'Loading'
      text.classList.add('show')
    },

    cursorOut() {
      const cursor = document.querySelector('.c-cursor')
      const text = document.querySelector('.cursor-text')
      cursor.classList.remove('cta')
      text.textContent = ''
      text.classList.remove('show')
    }
  }
}
</script>
