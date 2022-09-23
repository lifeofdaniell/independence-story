<template>
  <div ref="cursor" class="c-cursor">
    <div class="cursor-text">
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
  opacity: 0;
  left: -15px;
  top: -15px;
  width: 30px;
  height: 30px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0);
  z-index: 9999;
  transition: transform 200ms ease-out, left 300ms ease, top 300ms ease,
    background-color 300ms ease;
}

body:hover .c-cursor {
  opacity: 1;
  color: white;
}
</style>
