<template>
  <div>
    <v-img v-if="pictureDay" contain :src="pictureDay"></v-img>
  </div>
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
div
  display: flex
  border: 2px solid white
  max-width: 36vw

.v-image
  max-height: 50vh

</style>
