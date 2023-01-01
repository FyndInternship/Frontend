<template>
  <v-navigation-drawer>
    <div class="profileLogo">

    </div>
  </v-navigation-drawer>
    <v-container>
          <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="state"
            :rules="nameRules"
            :counter="10"
            label="State"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="city"
            :rules="nameRules"
            :counter="10"
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="pincode"
            :rules="emailRules"
            label="Pincode"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="3"
        >
        <v-btn>Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

    <v-container>
        <h1>Available Tiffin Centers</h1>
        <div class="cardsDiv">
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>


        </div>
    </v-container>

    </v-container>
</template>

<script>
import TiffinCards from '../Components/TiffinCards.vue'
export default {
    components: {
        TiffinCards
    },
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
}
</script>

<style scoped>
.cardsDiv{
    display: grid;
    grid-template-columns: auto auto auto ;
    gap: 30px;
    /* grid-template-rows: 1 1 ; */
}
</style>