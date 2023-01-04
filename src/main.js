import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import store from './Store'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})


const app = createApp(App)


app.use(store)
//router registrations
app.use(router);
app.use(vuetify)
app.mount('#app')