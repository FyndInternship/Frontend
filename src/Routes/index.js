import { createRouter, createWebHistory } from "vue-router";
import SignIn from '../View/SignIn.vue';
import SignUp from '../View/SignUp.vue';

const router = createRouter({
    routes: [
        {
            name: 'signin',
            path: '/signin',
            component: SignIn
        },
        {
            name: 'signup',
            path: '/signup',
            component: SignUp
        },
    ],
    history: createWebHistory()

})

export default router;