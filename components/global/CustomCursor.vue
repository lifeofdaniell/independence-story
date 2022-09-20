<template>
  <div
    ref="cursor"
    class="c-cursor"
    :class="[loaderOpen ? 'load' : '', hovered ? 'hovered' : '']">
    <div class="cursor-text" :class="hovered ? 'hovered' : ''">
      {{ loaderOpen ? 'Loading' : 'View' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientX: -100,
      clientY: -100
    }
  },

  computed: {
    loaderOpen() {
      return this.$store.getters.loadingState
    },

    hovered() {
      return this.$store.getters.hoverState
    }
  },

  mounted() {
    this.initCursor()
  },

  methods: {
    initCursor() {
      document.addEventListener('mousemove', (e) => {
        this.clientX = e.clientX
        this.clientY = e.clientY
      })
      this.renderCursor()
      requestAnimationFrame(this.renderCursor)
    },

    renderCursor() {
      this.$refs.cursor.style.transform = `translate(${this.clientX}px, ${this.clientY}px)`
      requestAnimationFrame(this.renderCursor)
    }
  }
}
</script>
<style>
.c-cursor {
  left: -15px;
  top: -15px;
  width: 30px;
  height: 30px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0);
  z-index: 9999;
  transition: height 300ms ease, width 300ms ease, opacity 200ms ease,
    transform 200ms ease-out, left 300ms ease, top 300ms ease,
    background-color 300ms ease;
}
/* .c-cursor.load {
  width: 100px;
  height: 100px;
  left: -50px;
  top: -50px;
} */
.c-cursor.hovered {
  width: 15px;
  height: 15px;
  left: -7.5px;
  top: -7.5px;
  background-color: rgb(255, 255, 255);
}
.cursor-text {
  transition: opacity 300ms ease;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0;
  font-size: 11px;
  font-weight: 300;
}
.cursor-text.hovered {
  opacity: 0;
}
body:hover .c-cursor {
  opacity: 1;
  color: white;
}
</style>
