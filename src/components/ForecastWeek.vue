<template>
<v-container>
 <v-layout>
    <v-flex xs2 v-for="day in forecastDisplay" :key="day.date">
      <v-card>
        <v-card-title>
          <div>
            <p class="title">{{ day.date | day }}</p>
            <p class="title">{{ day.date | date }}</p>
          </div>
        </v-card-title>
        <v-card-text>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>

export default {
  name: 'ForecastWeek',
  data () {
    return {
      weekDays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vemdredi', 'Samedi'],
      YearMonths: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'September', 'Octobre', 'Novembre', 'Decembre']
    }
  },
  computed: {
    forecastWeatherData () {
        return this.$store.getters.getForecast
    },
    forecastDisplay () {
      let tableDisplay =[]
      let today= new Date()
      tableDisplay.push({'date': today})
      for (let i=1; i<5; i++) {
        tableDisplay.push({'date': new Date(today.getFullYear(), today.getMonth(), today.getDate()+i)})
      }
      
      console.log(tableDisplay)
      return (tableDisplay)
    }
},
filters: {
  day: function (value) {
     let weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vemdredi', 'Samedi']

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

</style>
