<template>
  <div>
    hello cathy!
    <div>{{ msg }}</div>
    <div>{{ $route.params.id }}</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'hello cathy everyday'
    }
  }
}
</script>
<style scoped>
 div{border: 1px solid red}
</style>
