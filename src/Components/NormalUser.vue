<template>
  <v-navigation-drawer>
    <div class="profileLogo"><font-awesome-icon icon="fa-solid fa-user"/></div>
    <div>
        <h1 class="text-center">{{$store.getters.getUserDetails?.name}}</h1>
        <div class="details">
        <v-chip class="details_item">State: {{$store.getters.getUserDetails?.address.state}}</v-chip>    
        <v-chip class="details_item">City: {{$store.getters.getUserDetails?.address.city}}</v-chip>   
        <v-chip class="details_item">Pincode: {{$store.getters.getUserDetails?.address.pincode}}</v-chip> 
        <v-chip class="details_item">street: {{$store.getters.getUserDetails?.address.street}}</v-chip>   
        <v-chip class="details_item">Contact No: {{$store.getters.getUserDetails?.contact_no}}</v-chip>    

</div>




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
.profileLogo{
    text-align: center;
    padding: 1rem;
    color: rgb(255, 55, 15);
    font-size: 10rem;
    border-bottom: 2px dotted black;

}
.details{
    display: flex;
    flex-direction: column;
    align-items: center;
        /* border-bottom: 2px dotted black; */
    border-top: 2px dotted black;
    padding: 10px;

}
.details_item {
    margin: 2px;
    font-weight: bolder;
}
</style>