<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script> 

export default {
  name: "App",
  created() { 
   const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}}/products`; 
  }, 
};
</script>
 
<style lang="scss">
// 載入module
@import "./assets/all";
</style>

