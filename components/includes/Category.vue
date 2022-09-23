<template>
  <nuxt-link
    class="c-category"
    :to="link"
    @mouseenter.native="categoryHoverIn"
    @mouseleave.native="categoryHoverOut">
    <div class="c-category__inner" :class="addColorClass(colors).categoryColor">
      <img alt="" class="category-img" loading="lazy" :src="img" />
      <div class="category-inner__slide">
        <div
          class="skeleton-wrapper"
          :class="addColorClass(colors).wrapperColor">
          <div class="skeleton-flex top">
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
          </div>
          <div class="skeleton-flex top">
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
          </div>
        </div>
        <div
          class="skeleton-wrapper"
          :class="addColorClass(colors).wrapperColor">
          <div class="skeleton-flex bottom">
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
          </div>
          <div class="skeleton-flex bottom">
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
            <div class="slide-skeleton"></div>
          </div>
        </div>
      </div>
      <div
        class="category-header inner"
        :class="addColorClass(colors).innerColor">
        {{ category }}
      </div>
    </div>
    <div class="c-category__details">
      <div class="category-header" :class="white ? 'white' : ''">
        {{ category }}
      </div>
      <div class="category-description" :class="white ? 'white' : ''">
        <slot name="description" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    white: Boolean,
    colors: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

    categoryHoverIn(e) {
      e.currentTarget.lastElementChild.classList.add('active')
      e.currentTarget.firstElementChild.firstElementChild.classList.add('show')
    },

    categoryHoverOut(e) {
      e.currentTarget.lastElementChild.classList.remove('active')
      e.currentTarget.firstElementChild.firstElementChild.classList.remove(
        'show'
      )
    },

    addColorClass(color) {
      const _color = {
        categoryColor: '',
        wrapperColor: '',
        innerColor: ''
      }
      switch (color) {
        case 'pastel-green':
          _color.categoryColor = 'pastel-green'
          _color.wrapperColor = 'dark-cyan'
          _color.innerColor = 'dark'
          return _color
        case 'green':
          _color.categoryColor = 'green'
          _color.wrapperColor = 'black'
          _color.innerColor = ''
          return _color
        case 'dark-cyan':
          _color.categoryColor = 'dark-cyan'
          _color.wrapperColor = 'green'
          _color.innerColor = 'light'
          return _color
        case 'black':
          _color.categoryColor = 'black'
          _color.wrapperColor = 'white'
          _color.innerColor = 'white'
          return _color
        default:
          _color.categoryColor = ''
          _color.wrapperColor = 'green'
          _color.innerColor = 'green'
          return _color
      }
    }
  }
}
</script>

<style scoped>
.skeleton-wrapper::-webkit-scrollbar {
  display: none;
}
.skeleton-wrapper {
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.skeleton-wrapper.green > .skeleton-flex > .slide-skeleton {
  border-color: #bde7be;
}
.skeleton-wrapper.white > .skeleton-flex > .slide-skeleton {
  border-color: #ffffff;
}
.skeleton-wrapper.black > .skeleton-flex > .slide-skeleton {
  border-color: #000000;
}
.skeleton-wrapper.dark-cyan > .skeleton-flex > .slide-skeleton {
  border-color: #57867d;
}
</style>
