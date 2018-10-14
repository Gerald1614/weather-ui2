import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VList,
  VBtn,
  VIcon,
  VImg,
  VGrid,
  VProgressCircular,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VList,
    VBtn,
    VIcon,
    VImg,
    VGrid,
    VProgressCircular,
    VToolbar,
    transitions
  },
  iconfont: 'mdi'
})
