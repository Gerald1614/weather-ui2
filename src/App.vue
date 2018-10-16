<template>
  <v-app dark>
    <weather></weather>
  </v-app>
</template>

<script>
import Weather from './components/Weather'
export default {
  name: 'App',
  components: {
    Weather
  },
  data () {
    return {
      interval: null
    }
  },
  methods: {
    checkAPI() {
      this.interval = setInterval(() => {
        this.$store.dispatch('getForecastWeather')
        this.$store.dispatch('getCurrentWeather')
        console.log('API fetched')
      }, 900000)
    }
  },
  created: function () {
    this.$store.dispatch('getForecastWeather')
    this.$store.dispatch('getCurrentWeather')
    console.log('API initial fetched ')
    this.checkAPI()
    },
   beforeDestroy: function(){
      clearInterval(this.interval);
    }
}
</script>
<style lang="stylus">
.theme--dark.application
  background-color : black

.application
  font-family: 'Josefin Sans'
</style>
