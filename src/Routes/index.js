import { createRouter, createWebHistory } from "vue-router";
import SignIn from '../View/SignIn.vue';
import SignUp from '../View/SignUp.vue';
import HomePage from '../View/HomePage.vue';
import store from '../Store/index'
import { getLSisServiceProvider } from "@/Utils/LocalStorage";
const router = createRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        },
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
router.beforeEach((to, from, next) => {
    // const loggedIn = localStorage.getItem('loggedIn')
 
    let isServiceProvider = getLSisServiceProvider();

    // if(isServiceProvider)
    if(isServiceProvider === "true")
        isServiceProvider = true
    else 
        isServiceProvider = false
    // console.log(isServiceProvider))
    store.commit('logInServiceProvider', isServiceProvider)
    store.commit('logInUser', !isServiceProvider)

    // if(loggedIn)
    // store.commit('logInUser')
    if(to.meta.requiresAuth && !store.getters.getIsLoggedInUser && !store.getters.getIsLoggedInServiceProvider) {
        next('/signin')
    } else {
        next()
    }
})

export default router;