import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* Import Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faUser, 
    faBriefcase, 
    faCode, 
    faLightbulb,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'

/* Add icons to the library */
library.add(
    faUser, 
    faBriefcase, 
    faCode, 
    faLightbulb,
    faBars,
    faTimes
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
