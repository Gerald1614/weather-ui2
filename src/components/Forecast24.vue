<template>
  <forecast24-chart  :chart-data="datacollection" :options="chartOptions"></forecast24-chart>
</template>

<script>
import Forecast24Chart from '../charts/forecast24.js'
export default {
  name: 'Forecast24',
  components: { Forecast24Chart },
    data () {
    return {
      datacollection: null,
      chartOptions: {
        showLines: true,
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: 'SlateGray'
            },
            ticks: {
              fontColor: 'white',
              fontFamily: "'Josefin Sans'",
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white',
              fontFamily: "'Josefin Sans'",
            },
            time: {
              unit: 'hour'
            }
          }]
        },
        title: {
          display: true,
          text: 'Évolution températures sur 24 heures',
          fontSize: 18,
          fontFamily: "'Josefin Sans'",
          fontColor: 'white'
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
computed: {
    forecastWeatherData () {
        return this.$store.getters.getForecast
    }
},
mounted () {
  this.fillData()
},
methods: {
  fillData () {
    let tableData = this.forecastWeatherData.list.slice(0, 9)
    console.log(tableData)
    let timing = tableData.map(time => {
      let x = new Date(time.dt_txt)
      let hour = new Date(x.setHours(x.getHours()-4))
      return hour.getHours() + ' H'
      })
      let tmp = tableData.map(x => x.main.temp)
      let tmp_max = tableData.map(x => x.main.temp_max)
      let tmp_min = tableData.map(x => x.main.temp_min)
    this.datacollection = {
        labels: timing,
        datasets: [
          {
            label: 'Température',
            borderColor: '#A5D6A7',
            data: tmp
          },
          {
            label: 'Température Minimale',
            borderColor: '#90CAF9',
            data: tmp_min
          },
          {
            label: 'Température Maximale',
            borderColor: '#FFCC80',
            data: tmp_max
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
