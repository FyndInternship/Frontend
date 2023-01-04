import { createStore } from "vuex";
import authState from "./authState";
import tiffinServiceState from './tiffinServiceState'
import userTiffinState from './userTiffinState'
const store = createStore({
    modules: {
        authState: authState,
        tiffinServiceState: tiffinServiceState,
        userTiffinState: userTiffinState
    }
})

export default store;