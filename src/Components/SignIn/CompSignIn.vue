<template>
    <form @submit.prevent="callMe">
        <div>
            <v-text-field
                label="Email"
                :rules="rules"
                hide-details="auto"
                v-model="email"
            ></v-text-field>
            <br/>
            <v-text-field label="Password"></v-text-field>
        </div>
        <div style="display: flex; align-items: center">
           <v-btn variant="outlined" type="submit" color = "primary">Sign In</v-btn>
           <router-link to="/s">Forgot Password?</router-link>
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
      email: ''
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