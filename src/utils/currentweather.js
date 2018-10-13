import axios from 'axios'

export default {
  getCurrentWeather () {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=montreal,ca&appid=${process.env.VUE_APP_OWM_KEY}&units=metric`)
  }
}
