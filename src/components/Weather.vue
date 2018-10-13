<template>
  <v-container pa-1 ma-1 fluid grid-list-sm >
    <v-layout pa-1 ma-1 row wrap>
        <sensor-data></sensor-data>
    </v-layout>
    <v-layout pa-1 ma-1 row wrap>
      <v-flex xs7>
        <Forecast24 pa-2 v-if="!alt && this.$store.getters.getForecast" :forecast-weather-data="forecastWeatherData"></Forecast24>
        <forecast-week pa-2  v-if="alt"></forecast-week>
      </v-flex>
      <v-flex xs5>
        <picture-day></picture-day>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import PictureDay from './PictureDay'
import Forecast24 from './Forecast24'
import ForecastWeek from './ForecastWeek'
import SensorData from './SensorData'
export default {
  name: 'Weather',
  components: {
    PictureDay,
    Forecast24,
    ForecastWeek,
    SensorData
  },
  data () {
    return {
      alt: false
    }
  },
  computed: {
    forecastWeatherData () {
      if (this.$store.getters.getForecast) {
        let table = this.$store.getters.getForecast.list
        console.log(table)
        // reverse().map(pressure => (pressure.pressure_hPa))
        return this.$store.getters.getForecast
      } 
    }
  },
  mounted() {

    this.$store.dispatch('getForecastWeather')
    this.$store.dispatch('getCurrentWeather')
    setInterval(() => {
      this.$store.dispatch('getForecastWeather')
      this.$store.dispatch('getCurrentWeather')
    }, 1800000)
  },
}
</script>

<style lang="stylus" scoped>

</style>
