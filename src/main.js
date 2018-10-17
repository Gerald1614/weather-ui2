import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client'

let ioInstance = io(process.env.VUE_APP_SERVER_ADDRESS, { 'reconnection': true, 'reconnectionDelay': 2000, 'maxReconnectionAttempts': Infinity })
Vue.use(VueSocketio, ioInstance, store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
