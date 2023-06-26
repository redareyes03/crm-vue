import './assets/main.css'

import { createApp } from 'vue'
import {addIcons, OhVueIcon} from 'oh-vue-icons'
import { MdDarkmodeTwotone, MdWbsunnyTwotone, FaChevronDown, FaUserPlus, FaUserEdit, BiGearFill } from "oh-vue-icons/icons"
import App from './App.vue'
import router from './router'

const app = createApp(App)
addIcons(MdDarkmodeTwotone, MdWbsunnyTwotone, FaChevronDown, FaUserPlus, FaUserEdit, BiGearFill)
app.component('v-icon', OhVueIcon)
app.use(router)
app.mount('#app')
