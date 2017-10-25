<template>
  <div class="hxm-container" v-if="show">
      <ul>
          <li v-for="item in items" :key="item.name">
              <h3>{{item.name}}</h3>
              <br>
              <span>he {{item.hasPhone?'has':'don\'t has'}} phone</span>
              <br>
              <span>his age is {{item.age}}</span>
          </li>
      </ul>
      <input type="checkbox" :aria-checked="show" @change="val => show = val"></input>
  </div>
</template>

<script>
export default {
  name: 'hxm',
  data(){
    return {
        items: [
            {name: 'huangxiaomeng1', hasPhone: true, age: '12'},
            {name: 'huangxiaomeng2', hasPhone: false, age: '15'},
            {name: 'huangxiaomeng3', hasPhone: true, age: '28'},
            {name: 'huangxiaomeng4', hasPhone: false, age: '18'},
            {name: 'huangxiaomeng5', hasPhone: true, age: '38'}
        ],
        title: 'personInfo',
        show: true
    }
  },
  beforeCreate:function(){
      console.log('before create');
  },
  watch: {
      show: function() {
          alert('changed');
      }
  },
  created: function(){
      console.log('create success')
  },
  beforeDestroy: function(){
      console.log('before distory');
  },
  destroyed: function(){
      console.log('distoryed');
  }
}
</script>
<style>
    @import '../../public/stylesheets/hxm.scss'
</style>
