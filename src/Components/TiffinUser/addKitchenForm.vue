<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <div class="addKitchen">
        <v-btn
          color="#6200ee"
          v-bind="props"
           style = "color: white; width: 90%; font-weight: 900"
        >
          +Add Kitchen
        </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add a new Kitchen</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Kitchen Name*"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
             
              <v-col cols="12">
                <v-text-field
                  label="State*"
                  required
                  v-model="state"

                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="City*"
                  v-model="city"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
               <v-text-field
                  label="Street"
                  v-model="street"

                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
               <v-text-field
                  label="Pincode"
                  type="number"
                  v-model="pincode"

                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            type ="submit"
            @click="addKitchenDispatcher"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      state: "",
      city: "",
      pincode: "",
      street: "",
      name: ""
    }),
    methods: {
        addKitchenDispatcher() {
            const address = {}
            if(this.street != "")
            address["street"] = this.street
            if(this.city != "")
            address["city"] = this.city
            if(this.pincode != "")
            address["pincode"] = this.pincode    
            if(this.state != "")
            address["state"] = this.state
            const payload = {
                data: {
                    name: this.name,
                    address: address
                }
            }
         this.$store.dispatch('addNewKitchenAction', payload)   
             
}
    }
  }
</script>

<style scoped>
.addKitchen{
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>