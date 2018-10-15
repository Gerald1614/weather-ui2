import Vue from 'vue'
import Vuex from 'vuex'
import CurrentWeather from './utils/currentweather'
import ForecastWeather from './utils/forecast'

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
      console.log(state.sensor)
    },
    SOCKET_PAGEBTN: (state) => {
      state.switch_channel = !state.switch_channel
      console.log(state.switch_channel)
    },
    GET_CURRENT_WEATHER (state, payload) {
      state.weather = payload
    },
    GET_FORECAST_WEATHER (state, payload) {
      state.forecast = payload
    }
  },
  actions: {
    async getCurrentWeather ({ commit }) {
      const data = await CurrentWeather.getCurrentWeather()
      commit('GET_CURRENT_WEATHER', data.data)
    },
    async getForecastWeather ({ commit }) {
      const data = await ForecastWeather.getForecastWeather()
      commit('GET_FORECAST_WEATHER', data.data)
    },
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
