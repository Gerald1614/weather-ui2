<template>
  <pression-chart :chart-data="datacollection" :options="options"></pression-chart>
</template>

<script>
import PressionChart from '../charts/pressionChart.js'
export default {
  name: 'pression',
  components: { PressionChart },
  computed: {
    sensorWeatherData () {
        return this.$store.getters.receivedSensorData
    },
      datacollection() {
        let data =  {
          labels: ['H-2', 'H-90mn', 'H-1', 'H-30mn', 'H'],
          datasets: [
          {
            backgroundColor: '#00695C',
            hoverBackgroundColor: '#009688',
            data: this.sensorWeatherData.data.map(pressure => (pressure.pressure_hPa))
          }
        ]
        }
        console.log(data)
        return data
      },
      options() {
        let Opt =
          {
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: 'SlateGray'
            },
            ticks: {
              // min: Number(this.sensorWeatherData.PressureMin.pressure) - 1,
              // max: Number(this.sensorWeatherData.PressureMax.pressure) + 1,
              fontColor: 'white',
              fontSize: 16
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white',
              fontSize: 16
            }
          }]
        },
        title: {
          display: true,
          text: 'PRESSION : ' + this.sensorWeatherData.data[this.sensorWeatherData.data.length - 1].pressure_hPa + ' hPa',
          fontSize: 20,
          fontFamily: "'Josefin Sans'",
          fontColor: 'white'
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
      }
      console.log(Opt)
      return Opt
    }
  },
    data () {
    return {

    }
  },
}
</script>
