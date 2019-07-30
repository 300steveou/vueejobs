// 習慣把第三方套件放上面
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})