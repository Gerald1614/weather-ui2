import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    if (this.$store.getters.getForecast) {
      this.renderChart(this.chartData, this.options)
      console.log(this.chartData)
    }
  }

}
