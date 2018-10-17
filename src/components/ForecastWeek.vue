<template>
<v-container>
 <v-layout px-0 row wrap justify-space-between>
    <v-flex xs3 v-for="(day, index) in forecastDisplay" :key="index">
      <v-card color="blue-grey darken-3">
        <v-card-text>
          <v-flex class="text-xs-center">
            <p class="title">{{ day.date | day }}</p>
            <p class="title">{{ day.date | date }}</p>
          </v-flex>

        </v-card-text>
        <v-card-text class="cardText text-xs-center">
          <img :src="day.iconDay" width="50%"/>
            <p class=" red--text title">{{ day.maxDay }} °C</p>
            <p class="blue--text title">{{ day.minDay }} °C</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>

export default {
  name: 'ForecastWeek',
  computed: {
    forecastWeatherData () {
        return this.$store.getters.getForecast
    },
    forecastDisplay () {
      console.log(this.forecastWeatherData)
      let tableDisplay =[]
    //  let today= new Date(this.forecastWeatherData.list[0].dt_txt)
        let today= new Date()
      for (let i=0; i<5; i++) {
        const Day = this.forecastWeatherData.list.filter( dateX => new Date(dateX.dt_txt).getDate() == today.getDate()+i)
        console.log(Day.length)
        let tmpData={}
      if (Day.length >4 ) {
        tmpData.date =  new Date(today.getFullYear(), today.getMonth(), today.getDate()+i)
        console.log(tableDisplay)
        console.log(Day)
        tmpData.minDay = this.getMinDay(Day).toFixed(1)
        tmpData.maxDay = this.getMaxDay(Day).toFixed(1)
        let iconName = Day.find(data => new Date(data.dt_txt).getHours() == 12).weather[0].icon
        tmpData.iconDay = 'http://openweathermap.org/img/w/' + iconName + '.png'
        tableDisplay.push(tmpData)
        }
      }
      console.log(tableDisplay)
      return (tableDisplay)
    }
  },
  methods: {
    getMinDay: (day)  => {
      return day.reduce((min, p) => p.main.temp < min ? p.main.temp : min, day[0].main.temp);
    },
    getMaxDay: (day) => {
      return day.reduce((max, p, index) =>  p.main.temp > max ? p.main.temp : max, day[0].main.temp);
    }
  },
  filters: {
    day: function (value) {
      let weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      return weekDays[value.getDay()]
    },
    date: function (value) {
      let yearMonths =  ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec']
      return value.getDate() + ' ' + yearMonths[value.getMonth()]
    }
  }
}
</script>

<style lang="stylus" scoped>
.cardText
  background-color: #263238
.v-card__text
  padding: 4px
</style>
