<template>
  <v-card
    :loading="loading"
    max-width="374"
  >
    <template v-slot:progress>
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img> -->

    <v-card-title ><h2>{{tiffin.name}}</h2></v-card-title>
    <v-card-subtitle><strong>Owner-</strong><i>{{tiffin.userId.name}}</i></v-card-subtitle>
    <v-card-subtitle><strong>Rating-</strong><i>5</i></v-card-subtitle>
    <v-card-subtitle><strong>ContactNo-</strong><i>{{tiffin.userId.contact_no}}</i></v-card-subtitle>
    <v-card-subtitle><strong>Street-</strong><i>{{tiffin.address.street}}</i></v-card-subtitle>
    
    <v-card-text>
      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> <strong>Availability</strong></v-card-title>

    <v-card-text>
      <ul class="mx-8">
            <li><strong>State:</strong><i> {{tiffin.address.state}}</i></li>
            <li><strong>City</strong><i> {{tiffin.address.city}}</i></li>
            <li><strong>Pincode:</strong><i> {{tiffin.address.pincode}}</i></li>
            


        </ul>
    </v-card-text>
        
    <v-card-actions>
        <div style = "display:flex; justify-content:space-between; align-items: center">
      <v-btn
        color="deep-purple lighten-2"
        @click="book"
        class="mx-2"
      >
        Book a Call
      </v-btn>
    <show-menu :menu = "this.tiffin.menu"></show-menu>
    </div>

    </v-card-actions>
  </v-card>
</template>


<script>
import bookCallApi from '../Api/userApi/bookACallApi';
import showMenu from '../Components/User/showMenu.vue'
  export default {
    props: ['tiffin'],
    data: () => ({
      loading: false,
      selection: 1,
    }),
    components: {
        showMenu
    },

    methods: {
      async book () {
        this.loading = true 
        await bookCallApi(this.tiffin._id);
        this.loading = false;
      },
    },
  }
</script>