<template>
  <!-- <v-row class="flex">
    <v-col class=" text-center" cols="4">
      fgfdgfdgfd
    </v-col>
    <v-col class=" text-center" cols="4">gfdfdgfdgfd</v-col>
    <v-col class=" text-center" cols="4">fgdfdg</v-col>

  </v-row> -->
  <div>
    <navBar />
    <tabela class="mt-16" />
  </div>
</template>

<script>
import tabela from '../components/tabela.vue';
import navBar from '../components/navBar.vue';
export default {
  name: 'InspirePage',
  comments: {
    tabela, navBar
  },
}
</script>



        