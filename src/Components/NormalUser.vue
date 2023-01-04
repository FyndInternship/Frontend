<template>
  <v-navigation-drawer>
    <div class="profileLogo">
<!-- <v-icon icon="fa-duotone fa-user"></v-icon> -->
    </div>
  </v-navigation-drawer>
    <v-container>
        <search-tiffin></search-tiffin>
        <show-tiffins></show-tiffins>
    </v-container>
</template>

<script>
import searchTiffin from '../Components/User/searchTiffin.vue'
import ShowTiffins from '../Components/User/showTiffins.vue'
export default {
    components: {
        searchTiffin,
        ShowTiffins
    },
    
}
</script>

<style scoped>

</style>