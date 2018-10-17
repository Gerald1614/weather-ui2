import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    sensor: null,
    weather: null,
    forecast: null,
    switch_channel: false
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
      console.log('capteur', state.sensor)
    },
    SOCKET_PAGEBTN: (state) => {
      state.switch_channel = !state.switch_channel
      console.log(state.switch_channel)
    },
    SOCKET_CURRENTWEATHER (state, payload) {
      state.weather = payload[0]
      console.log('current weather', payload[0])
    },
    SOCKET_FORECASTWEATHER (state, payload) {
      state.forecast = payload[0]
      console.log(' forecast weather', payload[0])
    }
  },
  actions: {
    switch_Channel ({ commit }) {
      commit('SOCKET_PAGEBTN')
    }
  },
  getters: {
    getWeather: (state) => {
      return state.weather
    },
    getForecast: (state) => {
      return state.forecast
    },
    getChannel: (state) => {
      return state.switch_channel
    },
    receivedSensorData: (state) => {
      return state.sensor
    }
  }
})
