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

    <v-card-title ><h2>Om Services</h2></v-card-title>
    <v-card-subtitle><strong>Owner-</strong><i>RamJi</i></v-card-subtitle>
    <v-card-subtitle><strong>Rating-</strong><i>5</i></v-card-subtitle>
    <v-card-subtitle><strong>ContactNo-</strong><i>9519141281</i></v-card-subtitle>
    <v-card-subtitle><strong>Street-</strong><i>Habibpura, Varanasi</i></v-card-subtitle>
    
    <v-card-text>
      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> <strong>Availability</strong></v-card-title>

    <v-card-text>
      <ul class="mx-8">
            <li><strong>State:</strong><i> U.P.</i></li>
            <li><strong>City</strong><i> Varanasi</i></li>
            <li><strong>Pincode:</strong><i> 221001</i></li>
            


        </ul>
    </v-card-text>
        
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        @click="reserve"
      >
        Book a Call
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>