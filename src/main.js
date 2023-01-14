import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faTrash, faUser)
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


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)


app.use(store)
//router registrations
app.use(router);
app.use(vuetify)
app.use(Antd)
app.mount('#app')