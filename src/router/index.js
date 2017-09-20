import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index.vue';
import playing from '../pages/playing.vue';

import self from '../pages/Iself.vue';
import concat from '../pages/Iconcat.vue';
import moments from '../pages/Imoments.vue';

Vue.use(Router);
console.log(self)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component:index,
      children:[
        {
          path:'self',
          component:self
        },
        {
          path:'concat',
          component:concat
        },
        {
          path:'moments',
          component:moments
        }
      ]
    },
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/playing',
      name:'playing',
      component:playing
    }
  ]
})
