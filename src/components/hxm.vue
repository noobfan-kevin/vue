<template>
  <div class="hxm-container">
      <ul>
          <h2>{{title}}</h2>
          <li v-for="item in items" :key="item.name">
              <h3>{{item.name}}</h3>
              <br>
              <span>he {{item.hasPhone?'has':'don\'t has'}} phone</span>
              <br>
              <span>his age is {{item.age}}</span>
          </li>
      </ul>
      <input type="checkbox" @change="$event => show = $event.target.checked"></input>
      <br>
      <div v-if="show">
        <span>where is my tag</span>
      </div>
      <div v-else>
          <span>here is may tag</span>
          <br>
          <span>TAG......</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hxm',
  data(){
    return {
        items: [
            {name: 'huangxiaomeng1', hasPhone: true, age: '12'},
            {name: 'huangxiaomeng2', hasPhone: false, age: '15'}
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
          console.log(this.show);
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
