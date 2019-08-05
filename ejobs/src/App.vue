<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script> 

export default {
  name: "App",
  created() { 
   console.log(process.env.VUE_APP_API);
  //  console.log(process.env.VUE_APP_APIPATH);
  
  },
  // components: {
  //   HelloWorld
  // }
};
</script>
 
<style lang="scss">
// 載入module
@import "./assets/all";
</style>