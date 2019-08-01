<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script> 

export default {
  name: "App",
  created() {
    // 遠端路徑
    const api = " https://vue-course-api.hexschool.io/api/300steveou/products";
    console.log(process.env.APIPATH, process.env.CUSTOMPATH); 
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
  // components: {
  //   HelloWorld
  // }
};
</script>
 
<style lang="scss">
// 載入module
@import "./assets/all";
</style>