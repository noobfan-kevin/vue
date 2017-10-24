// import Vue from 'vue'

export default {
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

// export default new Vue({
//   el: 'hxm',
//   data: hxmData,
//   showAlter: function () {
//     window.alert('here is the show alter function demo.')
//   }
// })
// .$watch('show', function (_new, _old) {
//   window.alter('you toggle all info, before is ' + _old + ' now it change to ' + _new)
// })
