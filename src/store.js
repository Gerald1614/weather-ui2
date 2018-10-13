import Vue from 'vue'
import Vuex from 'vuex'
import CurrentWeather from './utils/currentweather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    sensor: null,
    weather: null
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
    },
    GET_CURRENT_WEATHER (state, payload) {
      state.weather = payload
    }
  },
  actions: {
    async getCurrentWeather ({ commit }) {
      const data = await CurrentWeather.getCurrentWeather()
      commit('GET_CURRENT_WEATHER', data.data)
    }
  },
  getters: {
    getWeather: (state) => {
      return state.weather
    },
    receivedSensorData: (state) => {
      return state.sensor
    }
  }
})
