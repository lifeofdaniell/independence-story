<template>
  <div class="c-menu">
    <div ref="scroller" class="c-menu__slider">
      <div class="menu-slider__inner">
        <nuxt-link
          class="c-category"
          to="/category/politics"
          @mouseenter.native="categoryHoverIn"
          @mouseleave.native="categoryHoverOut">
          <div class="c-category__inner">
            <img
              alt=""
              class="category-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            <div class="category-inner__slide">
              <div class="skeleton-wrapper">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
              <div class="skeleton-wrapper">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
            </div>
            <div class="category-header inner">
              <div>Politics</div>
            </div>
          </div>
          <div class="c-category__details">
            <div class="category-header">
              <div>Politics</div>
            </div>
            <div class="category-description">
              <div>We must warn you, it’s not exactly rosy.</div>
            </div>
          </div>
        </nuxt-link>
        <div
          class="c-category"
          @mouseenter="categoryHoverIn"
          @mouseleave="categoryHoverOut">
          <div class="c-category__inner pastel-green">
            <img
              alt=""
              class="category-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            <div class="category-inner__slide">
              <div class="skeleton-wrapper dark-cyan">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
              <div class="skeleton-wrapper dark-cyan">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
            </div>
            <div class="category-header inner dark">
              <div>Category</div>
            </div>
          </div>
          <div class="c-category__details">
            <div class="category-header">
              <div>Category #4</div>
            </div>
            <div class="category-description">
              <div>We must warn you, it’s not exactly rosy.</div>
            </div>
          </div>
        </div>
        <div
          class="c-category"
          @mouseenter="categoryHoverIn"
          @mouseleave="categoryHoverOut">
          <div class="c-category__inner green">
            <img
              alt=""
              class="category-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            <div class="category-inner__slide">
              <div class="skeleton-wrapper black">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
              <div class="skeleton-wrapper black">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
            </div>
            <div class="category-header inner">
              <div>Entertainment</div>
            </div>
          </div>
          <div class="c-category__details">
            <div class="category-header">
              <div>Entertainment</div>
            </div>
            <div class="category-description">
              <div>We must warn you, it’s not exactly rosy.</div>
            </div>
          </div>
        </div>
        <div
          class="c-category"
          @mouseenter="categoryHoverIn"
          @mouseleave="categoryHoverOut">
          <div class="c-category__inner dark-cyan">
            <img
              alt=""
              class="category-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            <div class="category-inner__slide">
              <div class="skeleton-wrapper green">
                <div class="skeleton-flex">
                  <div class="slide-skeleton green"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
              <div class="skeleton-wrapper green">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
            </div>
            <div class="category-header inner light">
              <div>Sports</div>
            </div>
          </div>
          <div class="c-category__details">
            <div class="category-header">
              <div>Sports</div>
            </div>
            <div class="category-description">
              <div>We must warn you, it’s not exactly rosy.</div>
            </div>
          </div>
        </div>
        <div
          class="c-category"
          @mouseenter="categoryHoverIn"
          @mouseleave="categoryHoverOut">
          <div class="c-category__inner black">
            <img
              alt=""
              class="category-img"
              loading="lazy"
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            <div class="category-inner__slide">
              <div class="skeleton-wrapper white">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
              <div class="skeleton-wrapper white">
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
                <div class="skeleton-flex">
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                  <div class="slide-skeleton"></div>
                </div>
              </div>
            </div>
            <div class="category-header inner white">
              <div>Category</div>
            </div>
          </div>
          <div class="c-category__details">
            <div class="category-header">
              <div>Category #4</div>
            </div>
            <div class="category-description">
              <div>We must warn you, it’s not exactly rosy.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-menu-img__block">
      <img
        alt=""
        class="c-menu__img one"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img two"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img three"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img four"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
      <img
        alt=""
        class="c-menu__img five"
        loading="lazy"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
    </div>
    <div class="c-menu__overlay"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.attachEvents()
  },

  methods: {
    scrollMenu(e) {
      this.$refs.scroller.scrollLeft += e.deltaY
    },

    attachEvents() {
      const menu = document.querySelector('.c-menu')
      if (window.innerWidth > 479) {
        menu.addEventListener('mousewheel', this.scrollMenu)
      } else {
        menu.removeEventListener('mousewheel', this.scrollMenu)
      }
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
    }
  }
}
</script>

<style scoped>
.c-category {
  text-decoration: none;
}
.category-img {
  transition: opacity 550ms ease-in;
  z-index: 1;
}
.category-img.show {
  display: flex;
  opacity: 1;
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
/* Hide scrollbar for Chrome, Safari and Opera */
.c-menu__slider::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.c-menu__slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
