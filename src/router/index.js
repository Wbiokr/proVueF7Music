import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index.vue';
import playing from '../pages/playing.vue';

import left from '../pages/index/left.vue';
import center from '../pages/index/center.vue';
import right from '../pages/index/right.vue';

Vue.use(Router);

export default new Router({
  mode:'history',//'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  routes: [
    {
      path: '/index',
      name: 'index',
      component:index,
      children:[
        {
          path:'left',//二级路由直接写名称，否则会被识别为一级路由
          component:left
        },
        {
          path:'center',
          component:center
        },
        {
          path:'right',
          component:right
        },
        {
          path:'/',
          redirect:'left'
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
