import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, process.env.VUE_APP_SERVER_ADDRESS, store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
