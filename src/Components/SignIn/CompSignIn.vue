<template>
    <form @submit.prevent="callMe">
        <div>
            <v-text-field
                label="Email"
                :rules="rules"
                type="email"
                hide-details="auto"
                v-model="email"
                required=true
            ></v-text-field>
            <br/>
            <v-text-field label="Password" v-model="password" type="password" required=true></v-text-field>
            <label>
                Log in as tiffin service provider?
               <v-snackbar
                    :timeout="-1"
                    value=true
                    absolute
                    bottom
                    color="primary"
                    left
                    text
                    >
      snackbar with <strong>text</strong> property.
    </v-snackbar>
            <v-radio-group v-model="isServiceProvider">
                <v-radio label="Yes" value=true></v-radio>
                <v-radio label="No" value=false></v-radio>
            </v-radio-group>
            </label>
        </div>
        <div style="display: flex; align-items: center">
           <v-btn variant="outlined" type="submit" color = "primary">Sign In</v-btn>
           <router-link to="/s">Forgot Password?</router-link>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      email: '',
      password: '',
      isServiceProvider: ""
    }),
    methods: {
        callMe() {
            const obj = {
               email: this.email,
               password: this.password,
               isServiceProvider: this.isServiceProvider
            }
            this.$store.dispatch('logIn',
                {
                    data: obj,
                    router: this.$router
                }
            )
        }
    },

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
</style>