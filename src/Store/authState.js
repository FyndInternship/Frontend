import signInApi, { signOutApi, signUpApi } from "@/Api/authApi/authApi"
import openErrorNotification, { openNormalNotification } from "@/commonComponents/openNotification"
import router from "@/Routes"
const authState = {
    state() {
        return {
            logInStarted: false,
            isLoggedInUser: false,
            isLoggedInServiceProvider: false,
            userDetails: null
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
        },
        getUserDetails(state) {
            return state.userDetails
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
            state.userDetails = null
            localStorage.clear()
        },
        updateLogInLoadStatus(state, payload) {
            state.logInStarted = payload.loading
        },
        setUserDetails(state, value) {
            state.userDetails = value;
        },
        resetAuthState(state) {
            state.logInStarted= false,
            state.isLoggedInUser= false,
            state.isLoggedInServiceProvider= false,
            state.userDetails= null
        }

    },
    actions: {
         logIn(context, payload) {
            context.commit('updateLogInLoadStatus', {loading: true})
            signInApi(payload.data)
            .then((res) => {
                console.log(res);
                context.commit('updateLogInLoadStatus', {loading: false})
                context.commit('logInServiceProvider', res.data.data.isServiceProvider)
                context.commit('logInUser', !res.data.data.isServiceProvider)
                context.commit('setUserDetails', res.data.data)
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('userId', res.data?.data?._id)
                localStorage.setItem('isServiceProvider', res.data?.data?.isServiceProvider)
                localStorage.setItem('userDetails', JSON.stringify(res.data.data))
                localStorage.setItem('token', res.data?.token)
                router.replace('/')
            }).catch((err) => {
                console.log(err)
                
                openErrorNotification({err, place: "signin"})

                context.commit('updateLogInLoadStatus', {loading: false})


            })

        },
        async signUp(context, payload) {
            try {
                await signUpApi(payload.data);
                openNormalNotification("SignUp successfully")
                setTimeout(() => {
                    router.replace('/signin')
                }, 2000)
            }catch(err) {
                openErrorNotification({err, place: "from sign up"})
            }
        },
        async logout(context) {
            try{
            await signOutApi()
            context.commit("resetAuthState")
            context.commit("resetTiffinServiceState")
            context.commit("resetUserTiffinState")
            localStorage.clear()
            router.replace('/signin')
            }catch(err) {
            openErrorNotification({err, place: "logout"})
                console.log(err)
            }
            
        }

    }
}

export default authState;