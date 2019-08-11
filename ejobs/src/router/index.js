import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "@/components/Dashboard";
import Login from "@/components/pages/Login";
import Products from '@/components/pages/Products';
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
// import CustomerOrdera from '@/components/pages/CustomerOrders';
import CustomerOrders from '@/components/pages/CustomerOrders';

Vue.use(Router);

export default new Router({
  routes: [
    {  
      path: '*',
      redirect :'login',
    },
    {
      // 對應的虛擬路徑
      path: '/login',
       // 元件呈現的名稱
      name: 'Login',
      // 對應的元件
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
        { 
          path: 'coupons',
          name: 'Coupons',
          component: Coupons, 
          meta: { requiresAuth: true },
        },
        { 
          path: 'orders',
          name: 'Orders',
          component: Orders, 
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,      
      children :[
        {
          path: 'customer_order',
          name: 'CustomerOrders',
          component: CustomerOrders,
        },
      ],
    },
  ]
})