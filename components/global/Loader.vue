<template>
  <div class="c-loader">
    <div class="c-loader__inner">
      <h4 class="no-margin">
        Where it all started
      </h4>
      <div class="loader-year">
        1960
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
      <div class="i-letter fall">
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
      imagesLoaded: 0,
      totalImages: 0,
      percent: 0,
      img: [
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327342/independence_media/GhanaMustGo_dvite8.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327339/independence_media/AnnulledElection_cvpkvo.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327339/independence_media/Biafara-War_yaqj4h.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327338/independence_media/BiafraWar_otk1l6.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327338/independence_media/AgbaniDarego_uv9zan.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327338/independence_media/DemocracyReturns_bb57o1.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327337/independence_media/ChibokGirls_vhsfew.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327337/independence_media/BiafraWar-Ended_ymujvc.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327336/independence_media/IndependenceDay_lxmnsx.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327334/independence_media/OppositionPartyWins_hze166.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327334/independence_media/Paystack-Founders_jc80fj.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327333/independence_media/FirstOlympicMedal_bzjuhy.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327333/independence_media/Wole-Soyinka-receiving-the-Nobel-Prize-in-1986_twalto.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327333/independence_media/FirstWorldCupGoal_mioye3.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327333/independence_media/OgoniNine_qnfvj5.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327332/independence_media/IndependenceDayCelebration_jlhmen.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327331/independence_media/WimbledonFirstRound_z6gz1f.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327330/independence_media/FirstAFCON_su81is.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327330/independence_media/QuadriArunaITF_psdox3.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327329/independence_media/OlympicGoldFootball_cy9ido.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327329/independence_media/OlympicGold_p9fy3q.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327329/independence_media/CanopyWalk_juqyje.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327328/independence_media/IsraelAdesanya_zetrgr.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327328/independence_media/MathsChampion_uiwwdt.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327327/independence_media/PaulKehindeGold_jehixs.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327326/independence_media/Anietocin_lim2jo.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327325/independence_media/IKDairo_qbvtfq.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327325/independence_media/lady-buckit-1_x81tli.png',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327323/independence_media/CanoppyWalk2_nefzkm.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327321/independence_media/Third-Mainland-Bridge_uebg4x.webp',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327320/independence_media/okwaraji-carried-out-of-pitch_iyr6q7.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327317/independence_media/bash-ali-d-boxer_e4buvd.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327317/independence_media/Tiwa-Savage_pptdbo.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327317/independence_media/bashali_n0guxl.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327316/independence_media/rsz_emeagwali-connection-machine_vk6yss.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327316/independence_media/Andela_nbuh0j.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327315/independence_media/Living-in-Bondage_c3g3rv.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/burna-boy-grammy-trophy_gxvnay.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/olamide-OLIC_npyvrh.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/IBM_ud56af.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327314/independence_media/MainOne_gefjxm.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327313/independence_media/ICT_q2gbcz.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327313/independence_media/NITEL_jp5jm6.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664327312/independence_media/Netflix-Nigeria_iehx2t.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664439680/independence_media/Andela-2_br7zpf.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664439679/independence_media/IBM-2_uypwix.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664439832/independence_media/IBM-3_gun4ha.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664440089/independence_media/UI_tv2sj5.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664441910/independence_media/Military_Coup_appjc8.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664441909/independence_media/Independence_kkyssq.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664442193/independence_media/nigeria-first-republic-840x473_gc5pca.jpg',
        'https://res.cloudinary.com/deljrzv80/image/upload/v1664442320/independence_media/vllkyttbh2ol5pd74_oek1dl.jpg'
      ]
    }
  },

  mounted() {
    this.loadingAnimation()
  },

  methods: {
    loadingAnimation() {
      this.$gsap.from('.letter-bg.load', {
        delay: 1,
        bottom: '50%',
        fontSize: '17vw',
        lineHeight: '18vw',
        duration: 3,
        ease: 'bounce.out'
      })
      this.$gsap.from(
        '.fall',
        {
          translateX: '0vw',
          translateY: '0vw',
          rotate: 0,
          duration: 7,
          ease: 'none'
        },
        '<'
      )
      this.$gsap.from(
        '.c-loader__inner',
        {
          autoAlpha: 0,
          duration: 1,
          onComplete: this.preloadImages
        },
        '<+3.5'
      )
    },

    preloadImages() {
      this.totalImages = this.img.length
      this.imgLoaded()
      for (let i = 0; i < this.totalImages; i++) {
        const tImg = new Image()
        tImg.onload = this.imgLoaded
        tImg.onerror = this.imgLoaded
        tImg.src = this.img[i]
      }
    },

    imgLoaded() {
      this.imagesLoaded += 1
      this.percent = ((100 / this.totalImages) * this.imagesLoaded - 1) << 0
      document.querySelector(
        '.loader-progress__fill'
      ).style.width = `${this.percent}%`
      if (this.imagesLoaded === this.totalImages) {
        return this.doneLoading()
      }
    },

    doneLoading() {
      this.$store.commit('toggleLoading', false)
    }
  }
}
</script>
