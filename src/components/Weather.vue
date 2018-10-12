<template>
  <v-container pa-1 ma-1 fluid grid-list-sm >
    <v-layout pa-1 ma-1 row wrap>
        <sensor-data></sensor-data>
    </v-layout>
    <v-layout pa-1 ma-1 row wrap>
      <v-flex xs6>
        <Forecast24></Forecast24>
        <forecast-week></forecast-week>
      </v-flex>
      <v-flex xs6>
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
