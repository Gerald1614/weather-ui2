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
    }
  }
}
</script>
<style lang="stylus">
.theme--dark.application
  background-color : black

.application
  font-family: 'Josefin Sans'
</style>
