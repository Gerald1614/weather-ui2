<template>
  <v-container fluid fill-height pa-1 ma-1 v-if="this.$store.getters.receivedSensorData">
    <v-layout pa-1 ma-1 row wrap align-center>
      <v-flex xs4>
        <v-layout row wrap align-center justify-center>
          <v-flex xs5 class="text-xs-center">
            <p class="lime--text display-1 underLined"> {{ sensor.temperature_C }} °C </p>
            <p class="title text-uppercase" >Température</p>
          </v-flex>
          <v-flex xs2 class="text-xs-center">
            <v-icon size="72" color="teal">mdi-home-outline</v-icon>
          </v-flex>
          <v-flex xs5 class="text-xs-center">
            <p class="display-1 underLined"> {{ sensor.humidity }} % </p>
            <p class="title text-uppercase">Humidité</p>
          </v-flex>
        </v-layout>
        <hr class="teal">
        <v-layout row wrap>
            <v-flex class="text-xs-center">
            <p class="title underLined">{{ this.$store.getters.receivedSensorData.alertPress}}</p>
              <p class="subheading text-uppercase">Prévision Locale</p>
            </v-flex>
        </v-layout>
        <hr class="teal">
          <v-layout row wrap>
            <v-flex px-2 xs6 class="text-xs-right">
              <v-icon size="72" color="red">mdi-thermometer</v-icon>
            </v-flex>
            <v-flex xs-6 class="text-xs-left">
              <p class="lime--text display-1 underLined">{{ sensor.temperature_C }}  °C</p>
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
hr
  margin: 4%
  
.underLined
  border-bottom: 2px solid OrangeRed
  display: inline-block
  margin-bottom: 4%

#bar-chart
  margin-left: auto
  margin-right: auto
</style>
