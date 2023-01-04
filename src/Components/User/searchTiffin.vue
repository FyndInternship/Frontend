<template>
          <v-form v-model="valid" @submit.prevent = "search">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="state"
            label="State"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="city"
            label="City"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="pincode"
            label="Pincode"
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="3"
        >
        <v-btn type = "submit">Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>

<script>
export default {
data: () => ({
      valid: false,
      state: '',
      city: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      pincode: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
        search() {
            const data ={}
            if(this.state !='')
                data['state'] = this.state
            if(this.city !='')
                data['city'] = this.city
            if(this.pincode !='')
                data['pincode'] = this.pincode
            this.$store.dispatch('getAllTiffinListAction', {data})
        }
    }
}
</script>

<style>

</style>