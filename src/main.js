import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
/* eslint-disable-next-line no-console */
console.log(`%c
 _     _                           
| |__ (_)_ __ ___   _ __ ___   ___    | |
| '_ \\| | '__/ _ \\ | '_ \` _ \\ / _ \\  _| |_
| | | | | | |  __/ | | | | | |  __/  \\   /
|_| |_|_|_|  \\___| |_| |_| |_|\\___|   \\_/

`, 'color: purple;')

/* eslint-disable-next-line no-console */
console.log('https://jasonpursey.com/contact')

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
