import { createRouter, createWebHistory } from "vue-router";
import SignIn from '../View/SignIn.vue';
import SignUp from '../View/SignUp.vue';
import HomePage from '../View/HomePage.vue';
import store from '../Store/index'
import { getLSisServiceProvider, getLSloggedIn, getLSuserDetails } from "@/Utils/LocalStorage";
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
            component: SignIn,
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'signup',
            path: '/signup',
            component: SignUp,
            meta: {
                requiresAuth: false
            }
        },
    ],
    history: createWebHistory()

})
router.beforeEach((to, from, next) => {
    // const loggedIn = localStorage.getItem('loggedIn')
 
    let isServiceProvider = getLSisServiceProvider();
    let user = getLSuserDetails();
    console.log(user)
    // if(isServiceProvider)
    if(isServiceProvider === "true")
        isServiceProvider = true
    else 
        isServiceProvider = false
    // console.log(isServiceProvider))
    const loggedIn = getLSloggedIn();

    if(loggedIn === "true") {
        store.commit('logInServiceProvider', isServiceProvider)
        store.commit('logInUser', !isServiceProvider)
        store.commit('setUserDetails', JSON.parse(user))
    } else {
        store.commit('logInServiceProvider', false)
        store.commit('logInUser', false)
        store.commit('setUserDetails', null)
    }
    if(to.meta.requiresAuth && loggedIn !== "true"  && !store.getters.getIsLoggedInUser && !store.getters.getIsLoggedInServiceProvider) {
        next('/signin')
    } else if(to.meta.requiresAuth && !user) {
        store.commit('logOut')
        next('/signin')
    }
    
    else if(to.meta.requiresAuth === false && loggedIn === "true") {
        next('/')
    }
     else {
        next()
    }
})

export default router;