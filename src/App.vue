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

  created: function () {
    this.$store.dispatch('getForecastWeather')
    this.$store.dispatch('getCurrentWeather')
    this.interval = setInterval(() => {
      this.$store.dispatch('getForecastWeather')
      this.$store.dispatch('getCurrentWeather')
    }, 9000000)
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
