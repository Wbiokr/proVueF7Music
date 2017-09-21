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
  mode:'history',//'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  routes: [
    {
      path: '/index',
      name: 'index',
      component:index,
      children:[
        {
          path:'self',//二级路由直接写名称，否则会被识别为一级路由
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
