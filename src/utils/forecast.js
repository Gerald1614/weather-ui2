import axios from 'axios'

export default {
  getForecastWeather () {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=montreal,ca&appid=${process.env.VUE_APP_OWM_KEY}&units=metric`)
  }
}
