<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <sensor-data></sensor-data>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-6>
        <Forecast24></Forecast24>
        <forecast-week></forecast-week>
      </v-flex>
      <v-flex xs-6>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
