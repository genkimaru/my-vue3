import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import MyApp from './MyApp.vue'
import slideInDirective from './directive/v-slide-in.js'

const app = createApp(MyApp)

app.directive('slide-in', slideInDirective);
app.mount('#app')
