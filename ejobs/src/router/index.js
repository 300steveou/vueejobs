import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "@/components/Dashboard";
import Login from "@/components/pages/Login";
import Products from '@/components/pages/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {  
      path: '*',
      redirect :'login',
    },
    // {
    //   // 元件呈現的名稱
    //   name: '首頁',
    //   // 對應的虛擬路徑
    //   path: '/',
    //   // 對應的元件
    //   component: HelloWorld
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,      
      children :[
        {
          // path 不用'/'
          path: 'products',
          name: 'Products',
          component: Products,
          // 驗證
          meta: { requiresAuth: true },
        },
      ],
    },
  ]
})