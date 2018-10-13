import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // Overwriting base render method with actual data.
    if (this.$store.getters.getForecast) {
      this.renderChart(this.chartData, this.options)
    }
  }
}