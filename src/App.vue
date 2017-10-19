<template>
  <div id="app">
    <img src="./assets/logo.png">
    <li><router-link to="/bar/user">Bar</router-link></li>
    <li><router-link to="/bar/user/posts">Post</router-link></li>
    <router-view/>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">fffff</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
