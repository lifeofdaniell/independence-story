<template>
  <div class="c-timeline">
    <div class="timeline-blip__wrapper" :class="reversed ? 'align-right' : ''">
      <div class="timeline-blip" :class="addColorClass(colors).blipColor">
        <div
          class="blip-inner"
          :class="addColorClass(colors).blipSmallColor"></div>
      </div>
      <div class="timeline-date" :class="addColorClass(colors).textColor">
        <slot name="timeline-date" />
      </div>
    </div>
    <div class="c-timeline__inner" :class="reversed ? 'inverse' : ''">
      <div class="timeline-text__wrapper">
        <h2 class="timeline-header" :class="addColorClass(colors).headerColor">
          <slot name="timeline-header" />
        </h2>
        <div
          class="timeline-subheader"
          :class="addColorClass(colors).textColor">
          <h4 class="timeline-text no-margin">
            <slot name="timeline-text" />
          </h4>
        </div>
      </div>
      <div class="timeline-detail__block" :class="reversed ? 'inverse' : ''">
        <div
          class="timeline-img__block"
          :class="addColorClass(colors).imgColor">
          <img alt="" class="img" loading="lazy" :src="imgSrc" />
        </div>
        <div
          class="timeline-subheader bottom"
          :class="[reversed ? 'right' : '', addColorClass(colors).textColor]">
          <h4 class="timeline-text no-margin">
            <slot name="timeline-subtext" />
          </h4>
        </div>
      </div>
      <div
        class="line vertical"
        :class="[reversed ? 'right' : '', addColorClass(colors).lineColor]"></div>
      <div
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
    }
  },

  mounted() {
    setTimeout(() => {
      this.timelineReveal()
    }, 500)
  },

  methods: {
    timelineReveal() {
      this.$gsap.utils.toArray('.reveal-block.vertical').forEach((reveal) => {
        this.$gsap.set(reveal, {
          y: '60px'
        })
        this.$gsap.to(reveal, {
          scrollTrigger: {
            scroller: '.scroller',
            trigger: reveal.parentElement,
            start: 'top 80%',
            scrub: true
          },
          yPercent: 100
        })
      })

      this.$gsap.utils
        .toArray('.reveal-block.horizontal.left')
        .forEach((reveal) => {
          this.$gsap.to(reveal, {
            scrollTrigger: {
              scroller: '.scroller',
              trigger: reveal.parentElement,
              start: 'top -5%',
              scrub: true
            },
            xPercent: 100
          })
        })

      this.$gsap.utils
        .toArray('.reveal-block.horizontal.right')
        .forEach((reveal) => {
          this.$gsap.to(reveal, {
            scrollTrigger: {
              scroller: '.scroller',
              trigger: reveal.parentElement,
              start: 'top -5%',
              scrub: true
            },
            xPercent: -100
          })
        })

      this.$gsap.utils.toArray('.timeline-img__block > .img').forEach((img) => {
        this.$gsap.to(img, {
          scrollTrigger: {
            scroller: '.scroller',
            trigger: img.parentElement,
            start: 'top 22%',
            end: 'top 15%',
            scrub: 1
          },
          opacity: 1
        })
      })
    },

    addColorClass(color) {
      const _color = {
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
          _color.lineColor = 'green'
          _color.imgColor = 'black'
          _color.revealColor = 'black'
          _color.blipColor = 'pastel-green'
          _color.blipSmallColor = 'green'
          return _color
        case 'pastel-green':
          _color.headerColor = 'dark-cyan'
          _color.textColor = 'black'
          _color.lineColor = 'dark-cyan'
          _color.imgColor = 'pastel-green'
          _color.revealColor = 'pastel-green'
          _color.blipColor = 'dark-cyan'
          _color.blipSmallColor = 'black'
          return _color
        case 'green':
          _color.headerColor = 'black'
          _color.textColor = 'black'
          _color.lineColor = 'black'
          _color.imgColor = 'green'
          _color.revealColor = 'green'
          _color.blipColor = 'black'
          _color.blipSmallColor = 'green'
          return _color
        case 'white':
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
    }
  }
}
</script>

<style>
.c-timeline {
  overflow: hidden;
}
.c-timeline__inner {
  z-index: auto;
}
.timeline-blip__wrapper {
  z-index: 5;
}
.timeline-text__wrapper,
.timeline-subheader {
  z-index: 10;
}
.timeline-img__block {
  position: relative;
  border: none;
  z-index: auto;
}
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
.timeline-img__block > .img {
  opacity: 0;
  position: relative;
  z-index: 6;
}
.timeline-img__block > svg,
.timeline-img__block > svg > rect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  fill: transparent;
}
.timeline-img__block > svg > rect {
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 250 250;
  stroke-dashoffset: 250;
  /* stroke-dasharray: 2100;
  stroke-dashoffset: 2100; */
}
.reveal-block {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #57867d;
}
.line.horizontal {
  z-index: 3;
}
.line.vertical {
  z-index: 4;
}
.line.straight {
  z-index: 4;
}
.reveal-block.vertical {
  z-index: 5;
}
.reveal-block.horizontal {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #57867d;
}
.reveal-block.reveal {
  transform: translate(0px, 100%);
}
@media screen and (min-width: 992px) {
  .c-timeline__inner {
    min-width: 935px;
    justify-content: space-between;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
  .c-timeline__inner.inverse {
    justify-content: space-between;
    grid-column-gap: 100px;
    grid-row-gap: 100px;
  }
  .timeline-text__wrapper {
    min-width: 325px;
  }
}

/* Green */
.reveal-block.green,
.reveal-block.green {
  background-color: #74e779;
}
.timeline-blip.black {
  background-color: black;
}
.blip-inner.green {
  background-color: #74e779;
}

.timeline-date.black,
.timeline-subheader.black,
.timeline-header.black {
  color: black;
}
.timeline-img__block.green:after {
  background-color: #74e779;
}

/* Pastel Green */
.reveal-block.pastel-green,
.reveal-block.pastel-green {
  background-color: #bde7be;
}

.blip-inner.black {
  background-color: black;
}

.line.dark-cyan {
  background-color: #57867d;
}

.timeline-header.dark-cyan {
  color: #57867d;
}
.timeline-img__block.pastel-green:after {
  background-color: #bde7be;
  border-color: #57867d;
}

/* White */
.reveal-block.white,
.reveal-block.white {
  background-color: white;
}

.timeline-date.green,
.timeline-header.green {
  color: #74e779;
}

.timeline-img__block.white:after {
  background-color: white;
  border-color: black;
}

/* Black */
.reveal-block.black,
.reveal-block.black {
  background-color: black;
}

.timeline-blip.pastel-green {
  background-color: #bde7be;
}

.line.green {
  background-color: #74e779;
}

.timeline-img__block.black:after {
  background-color: black;
  border-color: #74e779;
}
</style>
