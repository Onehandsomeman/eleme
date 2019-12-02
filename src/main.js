import Vue from 'vue';
import App from './App.vue';
import './assets/css/reset.css'
import router from './router'
import './common/stylus/index.styl'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
