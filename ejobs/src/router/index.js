import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/HelloWorld";
import Login from "@/components/pages/Login";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      // 元件呈現的名稱
      name: '首頁',
      // 對應的虛擬路徑
      path: '/',
      // 對應的元件
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})