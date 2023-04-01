<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="2">
          <sideBar />
        </v-col>
        <v-col cols="10">
          <v-container>
            <Nuxt />
          </v-container>
        </v-col>

      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import sideBar from '~/components/sidBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    sideBar
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';
</style>
