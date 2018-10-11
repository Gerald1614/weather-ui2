<template>
  <v-app>
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
    }
  }
}
</script>
<style lang="stylus">
.application
  font-family: 'Josefin Sans'
</style>
