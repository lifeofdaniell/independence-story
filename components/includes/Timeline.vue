<template>
  <div class="c-timeline">
    <div class="timeline-blip__wrapper" :class="reversed ? 'align-right' : ''">
      <div class="timeline-blip">
        <div class="blip-inner"></div>
      </div>
      <div class="timeline-date">
        <slot name="timeline-date" />
      </div>
    </div>
    <div class="c-timeline__inner" :class="reversed ? 'inverse' : ''">
      <div class="timeline-text__wrapper">
        <h2 class="timeline-header">
          <slot name="timeline-header" />
        </h2>
        <div class="timeline-subheader">
          <h4 class="timeline-text no-margin">
            <slot name="timeline-text" />
          </h4>
        </div>
      </div>
      <div class="timeline-detail__block" :class="reversed ? 'inverse' : ''">
        <div class="timeline-img__block">
          <img alt="" class="img" loading="lazy" :src="imgSrc" />
        </div>
        <div class="timeline-subheader bottom" :class="reversed ? 'right' : ''">
          <h4 class="timeline-text no-margin">
            <slot name="timeline-subtext" />
          </h4>
        </div>
      </div>
      <div class="line vertical" :class="reversed ? 'right' : ''"></div>
      <div class="line horizontal" :class="reversed ? 'right' : ''"></div>
    </div>
    <div class="line straight"></div>
    <div class="reveal-block vertical"></div>
    <div class="reveal-block horizontal"></div>
  </div>
</template>

<script>
export default {
  props: {
    reversed: Boolean,
    imgSrc: {
      type: String,
      required: true
    }
  },

  mounted() {
    setTimeout(() => {
      this.timelineReveal()
    }, 1000)
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
            start: 'top 90%',
            scrub: 1
          },
          yPercent: 100
        })
      })
      this.$gsap.utils.toArray('.timeline-img__block > .img').forEach((img) => {
        this.$gsap.to(img, {
          scrollTrigger: {
            scroller: '.scroller',
            trigger: img.parentElement,
            start: 'top 22%',
            end: 'top 15%',
            scrub: 2
          },
          opacity: 1
        })
      })
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
.timeline-text__wrapper,
.timeline-subheader {
  z-index: 5;
}
.timeline-img__block {
  z-index: 1;
}
.timeline-img__block {
  background-color: #57867d;
}
.timeline-img__block > .img {
  opacity: 0;
}
.reveal-block {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #57867d;
}
.reveal-block.horizontal {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #57867d;
  display: none;
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
</style>
