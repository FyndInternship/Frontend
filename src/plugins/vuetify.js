// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import { aliases, fa } from 'vuetify/iconsets/fa'
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
