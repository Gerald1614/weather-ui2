import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    sensor: null
  },
  mutations: {
    SOCKET_CONNECT: (state) => {
      state.connected = true
    },
    SOCKET_DISCONNECT: (state) => {
      state.connected = false
    },
    SOCKET_SENSORDATA: (state, message) => {
      state.sensor = JSON.parse(message)
      console.log(state.sensor)
    }
  },
  getters: {
    receivedSensorData: (state) => {
      return state.sensor
    }
  }
})
