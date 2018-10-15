<template>
<v-container>
 <v-layout px-0 row wrap justify-space-between>
    <v-flex xs2 v-for="(day, index) in forecastDisplay" :key="index">
      <v-card color="blue-grey darken-4">
        <v-card-text>
          <v-flex class="text-xs-center">
            <p class="subheading">{{ day.date | day }}</p>
            <p class="subheading">{{ day.date | date }}</p>
          </v-flex>

        </v-card-text>
        <v-card-text class="cardText">
          <v-img :src="day.iconDay"></v-img>
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
      console.log(this.forecastWeatherData.list)
      let tableDisplay =[]
      let today= new Date(this.forecastWeatherData.list[0].dt_txt)
      for (let i=0; i<5; i++) {
        tableDisplay.push({'date': new Date(today.getFullYear(), today.getMonth(), today.getDate()+i)})
      }

      for (let i=0; i<5; i++) {
        const Day = this.forecastWeatherData.list.filter( dateX => new Date(dateX.dt_txt).getDate() == tableDisplay[i].date.getDate())
        tableDisplay[i].minDay = this.getMinDay(Day).toFixed(1)
        tableDisplay[i].maxDay = this.getMaxDay(Day).toFixed(1)
        let iconName = Day.find(data => new Date(data.dt_txt).getHours() == 12).weather[0].icon
        tableDisplay[i].iconDay = 'http://openweathermap.org/img/w/' + iconName + '.png'
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
  background-color: #455a64
.v-card__text
  padding: 4px
</style>
