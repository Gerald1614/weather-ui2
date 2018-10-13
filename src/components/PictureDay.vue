<template>
    <v-img v-if="pictureDay" contain :src="pictureDay"></v-img>
</template>

<script>
export default {
  name: 'PictureDay',
  computed: {
      pictureDay() {
        if (this.$store.getters.receivedSensorData) {
          let linkPicture = this.$store.getters.receivedSensorData.pictureDay
          console.log(`${process.env.VUE_APP_SERVER_ADDRESS}/pictureDay/${linkPicture}`)
          return process.env.VUE_APP_SERVER_ADDRESS+ '/pictureDay/' + linkPicture
        } else {
          return null
        }
      }
  }
}
</script>

<style lang="stylus" scoped>
.v-image
  max-height: 56vh
  border: 4px solid white
  max-width: 34vw
</style>
