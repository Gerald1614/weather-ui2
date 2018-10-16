<template>
  <v-container fluid fill-height pa-1 ma-1 >
    <v-layout pa-1 ma-1 row wrap align-center>
      <v-flex xs5>
        <v-layout row wrap align-center justify-center>
          <v-flex xs5 class="text-xs-center">
            <v-progress-circular
              v-if="!isSensorDataLoaded"
              :size="40"
              :width="5"
              color="#D84315"
              indeterminate
            ></v-progress-circular>
            <p v-if="isSensorDataLoaded" class="lime--text display-1 underLined"> {{ sensorDataReceived.data[0].temperature_C }} °C </p>
            <p class="title text-uppercase" >Température</p>
          </v-flex>
          <v-flex xs2 class="text-xs-center">
            <v-icon size="72" color="teal">mdi-home-outline</v-icon>
          </v-flex>
          <v-flex xs5 class="text-xs-center">
            <v-progress-circular
              v-if="!isSensorDataLoaded"
              :size="40"
              :width="5"
              color="#D84315"
              indeterminate
            ></v-progress-circular>
            <p v-if="isSensorDataLoaded" class="display-1 underLined"> {{ sensorDataReceived.data[0].humidity }} % </p>
            <p class="title text-uppercase">Humidité</p>
          </v-flex>
        </v-layout>
        <hr class="teal">
        <v-layout row wrap>
            <v-flex class="text-xs-center">
            <v-progress-circular
              v-if="!isSensorDataLoaded"
              :size="40"
              :width="5"
              color="#D84315"
              indeterminate
            ></v-progress-circular>
            <p v-if="isSensorDataLoaded" class="lime--text  title underLined">{{ sensorDataReceived.alertPress}}</p>
              <p class="subheading text-uppercase">Prévision Locale</p>
            </v-flex>
        </v-layout>
        <hr class="teal">
            <v-progress-circular
              v-if="!isCurrentDataLoaded"
              :size="40"
              :width="5"
              color="green"
              indeterminate
            ></v-progress-circular>
          <v-layout v-if="isCurrentDataLoaded" row wrap align-end>
            <v-flex px-1 xs5 class="text-xs-center">
           <v-progress-circular
              :size="100"
              class="headline"
              :width="5"
              color="#D84315"
              :rotate="windRotate-95"
              :value="10"
            >{{ windDirection }}</v-progress-circular>
              <p class="lime--text display-1  underLined">{{ currentWeatherData.wind.speed*3600/1000 }}  km/h</p>

              <p class="title text-uppercase">Vent</p>
            </v-flex>
            <v-flex xs5 class="text-xs-center">
              <v-flex class="text-xs-center">
                <v-icon size="72" color="#D84315">mdi-thermometer</v-icon>
              </v-flex>
              <v-flex class="text-xs-center">
            <p class="lime--text display-1 underLined">{{ currentWeatherData.main.temp  }} °C</p>
              <p class="title text-uppercase">Temp. Ext.</p>
              </v-flex>
            </v-flex>
            <v-flex xs2 mb-3 class="text-xs-center">
              <img :src="cloudIcon" width="100%"/>
            </v-flex>
        </v-layout>
      </v-flex>
      
      <v-flex xs7>
        <v-progress-circular
          v-if="!isSensorDataLoaded"
            :size="60"
            :width="7"
            color="#D84315"
            indeterminate
          ></v-progress-circular>
        <pression-chart v-if="isSensorDataLoaded" ></pression-chart>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
import pressionChart from '../charts/pressionChart.js'
export default {
  name: 'SensorData',
  components: { pressionChart },
  data () {
    return {
      cloudIcon: null,
    }
  },
  computed: {
    isSensorDataLoaded () {
      return this.$store.getters.receivedSensorData
    },
    isCurrentDataLoaded () {
      return this.$store.getters.getWeather
    },
    currentWeatherData () {
      if(this.isCurrentDataLoaded) {
        this.cloudIcon = 'http://openweathermap.org/img/w/' + this.$store.getters.getWeather.weather[0].icon + '.png'
        return this.$store.getters.getWeather
      }
    },
      windDirection () {
        let deg =[22, 67, 112, 157, 202, 247, 292, 337]
        let direction = ['NE', 'East', 'SE', 'South', 'SW', 'West', 'NW', 'North']
        var result = deg.findIndex((el) => el > this.currentWeatherData.wind.deg )
        if (result ===-1 || result<=0) {
          return direction[7]
        } 
        return direction[result-1]
      },
      windRotate () {
        return this.currentWeatherData.wind.deg
      },
    sensorDataReceived () {
      if (this.isSensorDataLoaded) {
        return this.$store.getters.receivedSensorData
      } else return false
      
    }
  }
}
</script>

<style lang="stylus" scoped>
hr
  margin: 2%
  
.underLined
  border-bottom: 2px solid #D84315
  display: inline-block
  margin-bottom: 4%

#bar-chart
  margin-left: auto
  margin-right: auto
</style>
