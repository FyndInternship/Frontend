<template>
    <form @submit.prevent="callMe">
        <div>
            <v-text-field
                label="Username*"
                :rules="rules"
                hide-details="auto"
                v-model="name"
                required =true
            ></v-text-field>
            <br/>

            <v-text-field
                label="Email*"
                :rules="rules"
                v-model="email"
                required =true
                type="email"
            ></v-text-field>
            <div style="display:flex;">
            <v-text-field 
            label="Password*"
            v-model="password"
            required =true
            type="password"
            style="margin-right: 4px"
            >
            </v-text-field>

            <v-text-field label="Contact Number*"
            v-model="contact_no"
            required =true
            type="number"
            >

            </v-text-field>
            </div>

            <div class="address">
                <v-text-field
                label="State*"
                :rules="rules"
                hide-details="auto"
                v-model="state"
                required =true
                style="margin-right: 4px;"

            ></v-text-field>
                        <v-text-field
                label="City*"
                :rules="rules"
                hide-details="auto"
                v-model="city"
                required =true
            ></v-text-field>
            </div>
            <div class="address">
             <v-text-field
                label="Street"
                :rules="rules"
                hide-details="auto"
                v-model="street"
                style="margin-right: 4px;"
            ></v-text-field>
            <v-text-field label="Pincode*"
                            :rules="rules"
                hide-details="auto"
            v-model="pincode"
            required =true
            ></v-text-field>

            </div>
            <label>
                Are you tiffin service provider?*
            <v-radio-group v-model="isServiceProvider" required=true>
                <v-radio label="Yes" value=true></v-radio>
                <v-radio label="No" value=false></v-radio>
            </v-radio-group>
            </label>
        </div>

        <div style="display: flex; align-items: center">
           <v-btn variant="outlined" type="submit" color = "primary">Sign Up</v-btn>
        </div>

    </form>
</template>

<script>

export default {
    components: {
        // BaseCard
    },
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      name: '',
      password: '',
      email: '',
      isServiceProvider: '',
      street: '',
      state: '',
      city: '',
      pincode: '',
    }),
    methods: {
        callMe() {
            let data = {
            name: this.name,
            password: this.password,
            email: this.email,
            isServiceProvider: this.isServiceProvider,
            address: {
                street: this.street,
                state: this.state,
                city: this.city,
                pincode: this.pincode,
            }
        }

                        this.$store.dispatch('signUp',
                {
                    data: data,
                    router: this.$router
                }
            )
            alert(this.email)
        }
    }
}
</script>

<style scoped>
form {
    width: 100%;
}
a {
    text-decoration: none;
    margin-left: 1rem;
}
.address {
    /* display: flex;
    justify-content: space-around; */
}
</style>