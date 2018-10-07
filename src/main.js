import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/normalize.css'
var w = document.documentElement.clientWidth
document.getElementsByTagName('html')[0].style.fontSize = 625 * w/750 + '%'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
