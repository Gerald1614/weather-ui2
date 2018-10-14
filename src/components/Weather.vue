<template>
  <v-container pa-1 ma-1 fluid grid-list-sm >
    <v-layout pa-1 ma-1 row wrap align-center>
      <sensor-data></sensor-data>
    </v-layout>
    <v-layout pa-1 ma-1 row wrap align-center>
      <v-flex xs6 class="text-xs-center">
        <v-progress-circular
          v-if="!forecastWeatherData"
          :size="60"
          :width="7"
          color="blue"
          indeterminate
        ></v-progress-circular>
        <Forecast24 pa-2 v-if="!isSwitchPageOn && forecastWeatherData"></Forecast24>
        <forecast-week pa-2  v-if="isSwitchPageOn && forecastWeatherData"></forecast-week>
      </v-flex>
      <v-flex xs6 class="text-xs-center">
        <v-progress-circular
          v-if="!isSensorDataLoaded"
          :size="60"
          :width="7"
          color="#D84315"
          indeterminate
        ></v-progress-circular>
        <picture-day v-if="isSensorDataLoaded"></picture-day>
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
  computed: {

    isCurrentDataLoaded () {
      return this.$store.getters.getWeather
    },
    isSensorDataLoaded () {
      return this.$store.getters.receivedSensorData
    },
    isSwitchPageOn () {
      return this.$store.getters.getChannel
    },
    forecastWeatherData () {
        return this.$store.getters.getForecast
    }
  },
  created() {
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
