import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/bar/:id',
      component: Bar,
      children: [
        {
          path: 'posts',
          component: Post
        }
      ]
    }
  ]
})