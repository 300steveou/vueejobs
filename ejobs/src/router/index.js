import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/HelloWorld";
import Page from "@/components/pages/page";
import Account from "@/components/pages/account";
import About from "@/components/pages/about";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      // 元件呈現的名稱
      name: '首頁',
      // 對應的虛擬路徑
      path: '/index',
      // 對應的元件
      component: Home
    },
    {
      name: '分頁',
      path: '/page',
      component: Page,
      children: [
        {
          name: '分業1',
          path: '',
          component: Account
        },
        {
          name: '分頁2',
          path: 'child/id',
          component: About
        },
      ]
    },
  ]
})