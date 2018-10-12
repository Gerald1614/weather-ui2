<template>
  <v-container fluid fill-height pa-1 ma-1 v-if="this.$store.getters.receivedSensorData">
    <v-layout pa-1 ma-1 row wrap align-center>
      <v-flex xs4 >
        <v-layout row wrap>
          <v-flex xs6 class="text-xs-center">
            <p class="display-1 underLined"> {{ sensor.temperature_C }} °C </p>
            <p class="title text-uppercase" >Température</p>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <p class="display-1 underLined"> {{ sensor.humidity }} % </p>
            <p class="title text-uppercase">Humidité</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex class="text-xs-center">
              <p class="display-1 underLined">Prévision Locale</p>
              <p class="subheading text-uppercase">{{ this.$store.getters.receivedSensorData.alertPress}}</p>
            </v-flex>
        </v-layout>
          <v-layout row wrap>
            <v-flex class="text-xs-center">
              <p class="display-1 underLined">{{ sensor.temperature_C }}  °C</p>
              <p class="title text-uppercase">Temp. Ext.</p>
            </v-flex>
        </v-layout>
      </v-flex>
      
      <v-flex xs8>
        <pression-chart></pression-chart>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
import pressionChart from './pressionChart.js'
export default {
  name: 'SensorData',
  components: { pressionChart },
  computed: {
    sensor () {
      if (this.$store.getters.receivedSensorData) {
        return this.$store.getters.receivedSensorData.data[0]
      }
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.underLined
  border-bottom: 2px solid orange
  display: inline-block
  margin-bottom: 4%

#bar-chart
  margin-left: auto
  margin-right: auto
</style>
