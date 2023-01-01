import { createStore } from "vuex";
import authState from "./authState";
import tiffinServiceState from './tiffinServiceState'
const store = createStore({
    modules: {
        authState: authState,
        tiffinServiceState: tiffinServiceState
    }
})

export default store;