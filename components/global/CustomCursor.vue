<template>
  <div ref="cursor" class="c-cursor" :class="gridColor">
    <div class="cursor-text">
      Loading
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

    gridColor() {
      return this.$store.getters.getGridColor
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
  pointer-events: none;
}

.c-cursor.green {
  border-color: black;
}
.c-cursor.green.link {
  background-color: black;
}

.c-cursor.pastel-green {
  border-color: #57867d;
}
.c-cursor.pastel-green.link {
  background-color: #57867d;
}

.c-cursor.white {
  border-color: #74e779;
}
.c-cursor.white.link {
  background-color: #74e779;
}

.c-cursor.black,
.c-cursor.dark-cyan {
  border-color: #bde7be;
}
.c-cursor.black.link,
.c-cursor.dark-cyan.link {
  background-color: #bde7be;
}

.c-cursor.pastel-green.cta,
.c-cursor.white.cta,
.c-cursor.green.cta {
  color: black;
}

.c-cursor.black.cta,
.c-cursor.dark-cyan.cta {
  color: white;
}

.c-cursor.cta {
  width: 90px;
  height: 90px;
  left: -45px;
  top: -45px;
}

.c-cursor.link {
  width: 20px;
  height: 20px;
  left: -10px;
  top: -10px;
  background-color: white;
}

.cursor-text {
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 12px;
}

.cursor-text.show {
  opacity: 1;
}

body:hover .c-cursor {
  opacity: 1;
  color: white;
}
</style>
