<template>
  <div class="c-timeline">
    <div class="timeline-blip__wrapper" :class="reversed ? 'align-right' : ''">
      <div class="timeline-blip" :class="addColorClass(colors).blipColor">
        <div
          class="blip-inner"
          :class="addColorClass(colors).blipSmallColor"></div>
      </div>
      <div class="timeline-date" :class="addColorClass(colors).page" data-date>
        <slot name="timeline-date" />
      </div>
    </div>
    <div
      class="c-timeline__inner"
      :class="[reversed ? 'inverse' : '', !timeline.text ? 'small' : '']">
      <div
        class="timeline-text__wrapper"
        :class="addColorClass(colors).revealColor">
        <h2
          class="timeline-header"
          :class="addColorClass(colors).headerColor"
          data-header>
          <slot name="timeline-header" />
        </h2>
        <div class="timeline-subheader" :class="addColorClass(colors).page">
          <h4 class="timeline-text no-margin" data-paragraph>
            <slot name="timeline-text" />
          </h4>
        </div>
      </div>
      <div class="timeline-detail__block" :class="reversed ? 'inverse' : ''">
        <div
          class="timeline-img__block"
          :class="addColorClass(colors).imgColor">
          <img alt="" class="t-img" loading="lazy" :src="imgSrc" />
        </div>
        <div
          class="img-source"
          :class="[reversed ? 'inverse' : '', addColorClass(colors).page]">
          <div>
            Image Credits:
            <slot name="timeline-source" />
          </div>
          <div><a :href="readLink" target="_blank">Read More</a></div>
        </div>
        <div
          class="timeline-subheader bottom"
          :class="[reversed ? 'right' : '', addColorClass(colors).page]">
          <h4 class="timeline-text no-margin" data-paragraph-bottom>
            <slot name="timeline-subtext" />
          </h4>
        </div>
      </div>
      <div
        v-if="timeline.text"
        class="line vertical"
        :class="[reversed ? 'right' : '', addColorClass(colors).lineColor]"></div>
      <div
        v-if="timeline.text"
        class="line horizontal"
        :class="[reversed ? 'right' : '', addColorClass(colors).lineColor]"></div>
    </div>
    <div class="line straight" :class="addColorClass(colors).lineColor"></div>
    <div
      class="reveal-block vertical"
      :class="addColorClass(colors).revealColor"></div>
    <div
      class="reveal-block horizontal"
      :class="[reversed ? 'right' : 'left', addColorClass(colors).revealColor]"></div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: String
    },
    reversed: Boolean,
    imgSrc: {
      type: String,
      required: true
    },

    source: String,
    readLink: {
      type: String,
      required: true
    },
    timeline: {
      type: Object,
      default: () => {
        return {
          text: null
        }
      }
    }
  },

  data() {
    return {
      isMobile: false
    }
  },

  mounted() {
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
    setTimeout(() => {
      this.timelineReveal()
    }, 500)
  },

  methods: {
    timelineReveal() {
      this.$gsap.utils
        .toArray('.reveal-block.vertical')
        .forEach((reveal, i) => {
          this.$gsap.set(reveal, {
            y: this.isMobile ? '35px' : '60px'
          })
          if (i !== 0) {
            this.$gsap.to(reveal, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: reveal.parentElement,
                start: this.isMobile ? 'top 40%' : 'top 40%',
                scrub: this.isMobile ? 2 : true
              },
              yPercent: 100
            })
          } else {
            this.$gsap.to(reveal, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: reveal.parentElement,
                start: this.isMobile ? 'top 70%' : 'top 85%',
                scrub: this.isMobile ? 2 : true
              },
              yPercent: 100
            })
          }
        })

      this.$gsap.utils
        .toArray('.reveal-block.horizontal.left')
        .forEach((reveal, i) => {
          if (i !== 0) {
            this.$gsap.to(reveal, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: reveal.parentElement,
                start: this.isMobile ? 'top 0%' : 'top -20%',
                scrub: true
              },
              xPercent: 100
            })
          } else {
            this.$gsap.to(reveal, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: reveal.parentElement,
                start: this.isMobile ? 'top 0%' : 'top 0%',

                scrub: true
              },
              xPercent: 100
            })
          }
        })

      this.$gsap.utils
        .toArray('.reveal-block.horizontal.right')
        .forEach((reveal) => {
          this.$gsap.to(reveal, {
            scrollTrigger: {
              scroller: this.isMobile ? '' : '.scroller',
              trigger: reveal.parentElement,
              start: this.isMobile ? 'top 0%' : 'top -16%',
              scrub: true
            },
            xPercent: -100
          })
        })

      this.$gsap.utils
        .toArray('.timeline-img__block > .t-img')
        .forEach((img, i) => {
          if (i !== 0) {
            this.$gsap.to(img, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: img.parentElement,
                start: this.isMobile ? 'top 60%' : 'top 30%',
                end: this.isMobile ? 'top 50%' : 'top 20%',
                scrub: this.isMobile ? 3 : 1
              },
              opacity: 1
            })
          } else {
            this.$gsap.to(img, {
              scrollTrigger: {
                scroller: this.isMobile ? '' : '.scroller',
                trigger: img.parentElement,
                start: this.isMobile ? 'top 70%' : 'top 40%',
                end: this.isMobile ? 'top 60%' : 'top 30%',
                scrub: this.isMobile ? 3 : 1
              },
              opacity: 1
            })
          }
        })
    },

    addColorClass(color) {
      const _color = {
        page: '',
        headerColor: '',
        textColor: '',
        lineColor: '',
        imgColor: '',
        revealColor: '',
        blipColor: '',
        blipSmallColor: ''
      }
      switch (color) {
        case 'black':
          _color.page = 'random'
          _color.lineColor = 'green'
          _color.imgColor = 'black'
          _color.revealColor = 'black'
          _color.blipColor = 'pastel-green'
          _color.blipSmallColor = 'green'
          return _color
        case 'pastel-green':
          _color.page = 'sports'
          _color.headerColor = 'dark-cyan'
          _color.textColor = 'black'
          _color.lineColor = 'dark-cyan'
          _color.imgColor = 'pastel-green'
          _color.revealColor = 'pastel-green'
          _color.blipColor = 'dark-cyan'
          _color.blipSmallColor = 'black'
          return _color
        case 'green':
          _color.page = 'ent'
          _color.headerColor = 'black'
          _color.textColor = 'black'
          _color.lineColor = 'black'
          _color.imgColor = 'green'
          _color.revealColor = 'green'
          _color.blipColor = 'black'
          _color.blipSmallColor = 'green'
          return _color
        case 'white':
          _color.page = 'tech'
          _color.headerColor = 'green'
          _color.textColor = 'black'
          _color.lineColor = 'black'
          _color.imgColor = 'white'
          _color.revealColor = 'white'
          _color.blipColor = 'black'
          _color.blipSmallColor = 'green'
          return _color
        default:
          _color.headerColor = ''
          _color.textColor = ''
          _color.lineColor = ''
          _color.imgColor = ''
          _color.revealColor = ''
          _color.blipColor = ''
          _color.blipSmallColor = ''
          return _color
      }
    },

    checkDevice() {
      if (window.innerWidth <= 1024) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  }
}
</script>

<style>
.timeline-img__block::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  z-index: 5;
  background-color: #57867d;
  border: 1px solid black;
}
.timeline-img__block.green:after {
  background-color: #74e779;
}
.timeline-img__block.pastel-green:after {
  background-color: #bde7be;
  border-color: #57867d;
}
.timeline-img__block.white:after {
  background-color: white;
}
.timeline-img__block.black:after {
  background-color: black;
  border-color: #74e779;
}
</style>
