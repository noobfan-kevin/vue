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
      <button type="checkbox" :aria-checked="show" @change="val => show = val"></button>
  </div>
</template>

// <script>
// import hxmData from './hxm'
//     export default {
//   name: 'hxm',
//   data () {return hxmData}
//   }

// </script>

<script>
    import hxmData from './hxm'
    export default new Vue({
        el: 'hxm',
        data: hxmData,
        showAlter: function () {
            window.alert('here is the show alter function demo.')
        },
        render: h => (this)
    })
    .$watch('show', function (_new, _old) {
    window.alter('you toggle all info, before is ' + _old + ' now it change to ' + _new)
    })
    .mount('hxm');
</script>