<template>
    <form @submit.prevent="callMe">
        <div>
            <v-text-field
                label="Username"
                :rules="rules"
                hide-details="auto"
                v-model="username"
            ></v-text-field>
            <br/>

            <v-text-field
                label="Email"
                :rules="rules"
                hide-details="auto"
                v-model="email"
            ></v-text-field>
            <br/>
            <v-text-field label="Password">
            </v-text-field>

            <v-text-field label="Confirm Password">

            </v-text-field>
            <label>
                Are you tiffin service provider ?
            <v-radio-group v-model="serviceProvider">
                <v-radio label="Yes" value="true"></v-radio>
                <v-radio label="No" value="false"></v-radio>
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
      email: '',
      password: '',
      confirmPassword: '',
      userName: '',
      serviceProvider: ''
    }),
    methods: {
        callMe( ) {
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
</style>