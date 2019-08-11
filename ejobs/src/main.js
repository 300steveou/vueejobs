// 習慣把第三方套件放上面
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import BootstrapVue from 'bootstrap-vue'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

 
Vue.use(BootstrapVue) 
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('Loading',Loading)
Vue.filter('currency',currencyFilter)

// 參閱axios文件
// session 會存在application cookie裡面
axios.defaults.withCredentials = true;


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// router.beforeEach((to, from, next) => {
//   console.log('to', to, 'from', from, 'next', next);
//   // ...
//   if (to.meta.requiresAuth) {
//     const api = `${process.env.APIPATH}/api/user/check`;
//     axios.post(api).then((response) => {
//       console.log(response.data);
//       if (response.data.success) {
//         next();
//       } else {
//         next({
//           path: '/login',
//         });
//       }
//     });
//   } else {
//     next();
//   }
// }); 