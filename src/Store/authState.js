import signInApi from "@/Api/authApi/authApi"
import router from "@/Routes"
const authState = {
    state() {
        return {
            logInStarted: false,
            isLoggedInUser: false,
            isLoggedInServiceProvider: false
        }
    },
    getters: {
        getIsLoggedInUser(state) {
            return state.isLoggedInUser
        },
        getIsLoggedInServiceProvider(state) {
            return state.isLoggedInServiceProvider
        },
        getLogInStarted(state) {
            return state.logInStarted
        }

    },
    mutations: {
        logInUser(state, value) {
            state.isLoggedInUser = value
        },
        logInServiceProvider(state, value) {
            state.isLoggedInServiceProvider = value
        },
        logOut(state) {
            state.isLoggedInUser = false;
            state.isLoggedInServiceProvider = false
        },
        updateLogInLoadStatus(state, payload) {
            state.logInStarted = payload.loading
        }
    },
    actions: {
         logIn(context, payload) {
            context.commit('updateLogInLoadStatus', {loading: true})
            signInApi(payload.data)
            .then((res) => {
                console.log(res);
            context.commit('updateLogInLoadStatus', {loading: false})
            
            // f(res.data?.data?.isServiceProvider) {
                context.commit('logInServiceProvider', res.data.data.isServiceProvider)
                context.commit('logInUser', !res.data.data.isServiceProvider)

            // }
            // context.commit('logInUser')
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userId', res.data?.data?._id)
            localStorage.setItem('isServiceProvider', res.data?.data?.isServiceProvider)
            router.replace('/')
            }).catch((err) => {
                console.log(err)
                context.commit('updateLogInLoadStatus', {loading: false})

            })

        },
        logout(context) {
            

            context.commit('logOut');
            localStorage.clear();
            router.replace('/signin')
        }

    }
}

export default authState;