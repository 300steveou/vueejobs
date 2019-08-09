<template>
  <div class="hello"> 
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>
 

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    // 登出
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>

<!--scoped意思是指會在這運行 封裝在特定元件內-->
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
