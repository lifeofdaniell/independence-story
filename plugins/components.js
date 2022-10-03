import Vue from 'vue'
import MarqueeText from 'vue-marquee-text-component'
import LongPress from 'vue-directive-long-press'

Vue.directive('long-press', LongPress)

Vue.component('MarqueeText', MarqueeText)
