<template>
    <img max-width="100%" :height="PicHeight" v-if="imageDay" :src="imageDay"/>
</template>

<script>

export default {
  name: 'PictureDay',
  data() {
    return {
      PicWidth1: null,
      PicHeight1: null
    }
  },
  computed: {
      PicHeight () {
        return window.innerHeight * 0.42
      },
 
      imageDay () {
        if (this.$store.getters.receivedSensorData) {
          let linkPicture = this.$store.getters.receivedSensorData.pictureDay
          console.log(`${process.env.VUE_APP_SERVER_ADDRESS}/pictureDay/${linkPicture}`)
          return process.env.VUE_APP_SERVER_ADDRESS+ '/pictureDay/' + linkPicture
        } 
      }
  }
}
</script>

<style lang="stylus" scoped>
img 
  border: 4px solid white
</style>
