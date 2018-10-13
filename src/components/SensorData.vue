<template>
  <v-container fluid fill-height pa-1 ma-1 v-if="sensorDataReceived">
    <v-layout pa-1 ma-1 row wrap align-center>
      <v-flex xs4>
        <v-layout row wrap align-center justify-center>
          <v-flex xs5 class="text-xs-center">
            <p class="lime--text display-1 underLined"> {{ sensorDataReceived.data[0].temperature_C }} °C </p>
            <p class="title text-uppercase" >Température</p>
          </v-flex>
          <v-flex xs2 class="text-xs-center">
            <v-icon size="72" color="teal">mdi-home-outline</v-icon>
          </v-flex>
          <v-flex xs5 class="text-xs-center">
            <p class="display-1 underLined"> {{ sensorDataReceived.data[0].humidity }} % </p>
            <p class="title text-uppercase">Humidité</p>
          </v-flex>
        </v-layout>
        <hr class="teal">
        <v-layout row wrap>
            <v-flex class="text-xs-center">
            <p class="title underLined">{{ sensorDataReceived.alertPress}}</p>
              <p class="subheading text-uppercase">Prévision Locale</p>
            </v-flex>
        </v-layout>
        <hr class="teal">
          <v-layout row wrap align-center>
            <v-flex px-2 xs4 class="text-xs-right">
              <v-icon size="72" color="red">mdi-thermometer</v-icon>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <p class="lime--text display-1 underLined">{{ currentWeatherData.main.temp }}  °C</p>
              <p class="title text-uppercase">Temp. Ext.</p>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-img :src="cloudIcon" width="60%"></v-img>
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
  data () {
    return {
      cloudIcon: null,
    }
  },
  mounted() {
    this.$store.dispatch('getCurrentWeather')
  },
  computed: {
    currentWeatherData () {
      if(this.$store.getters.getWeather) {
        console.log(this.$store.getters.getWeather)
        this.cloudIcon = 'http://openweathermap.org/img/w/' + this.$store.getters.getWeather.weather[0].icon + '.png'

        return this.$store.getters.getWeather
      }

    },
    sensorDataReceived () {
      if (this.$store.getters.receivedSensorData) {
        return this.$store.getters.receivedSensorData
      } else return false
      
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
