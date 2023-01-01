<template>
<base-layout>
    <template v-slot:appBar>
      <v-app-bar>
        <v-spacer></v-spacer>
        <v-btn @click="logOut">LogOut</v-btn>
      </v-app-bar>
    </template>
    
    <template v-slot:layoutMain>
      <v-main>
        <tiffin-user v-if = "$store.getters.getIsLoggedInServiceProvider"></tiffin-user>
        <normal-user v-else></normal-user>
      </v-main>
    
    </template>
  </base-layout>

   
   <!-- <tiffin-user></tiffin-user> -->


</template>

<script>
// import NavBar from '@/Components/Navigation/NavBar.vue'
import TiffinUser from './TiffinUser.vue'
import BaseLayout from '../BaseComponents/BaseLayout.vue'
import NormalUser from '../Components/NormalUser.vue'
export default {
  components: { TiffinUser, BaseLayout, NormalUser },
  methods: {
    logOut() {
        this.$store.dispatch('logout')
    }
  }

}
</script>

<style scoped>

</style>