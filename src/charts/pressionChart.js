import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['H-2', 'H-90mn', 'H-1', 'H-30mn', 'H'],
        datasets: [
          {
            backgroundColor: '#00695C',
            hoverBackgroundColor: '#009688',
            data: this.$store.getters.receivedSensorData.data.map(pressure => (pressure.pressure_hPa))
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: 'SlateGray'
            },
            ticks: {
              min: Number(this.$store.getters.receivedSensorData.PressureMin.pressure) - 0.2,
              max: Number(this.$store.getters.receivedSensorData.PressureMax.pressure) + 0.2,
              fontColor: 'white'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }]
        },
        title: {
          display: true,
          text: 'PRESSION : ' + this.$store.getters.receivedSensorData.data[this.$store.getters.receivedSensorData.data.length - 1].pressure_hPa + ' hPa',
          fontSize: 20,
          fontFamily: "'Josefin Sans'",
          fontColor: 'white'
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.datacollection, this.options)
  },
  watch: {
    datacollection: function (x, y) {
      console.log('pressure data changed - uopdate chart')
      this.renderChart(this.chartData, this.options)
    }
  }
}
