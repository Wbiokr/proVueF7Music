import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index.vue';
import playing from '../pages/playing.vue';

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
          component:res=>require(['../pages/index/left.vue'],res)
        },
        {
          path:'center',
          component:res=>require(['../pages/index/center.vue'],res),
          children:[
            {
              path:'music',
              component:res=>require(['../pages/index/center/ICmusic.vue'],res)
            },
            {
              path:'audio',
              component:res=>require(['../pages/index/center/ICaudio.vue'],res)
            },
            {
              path:'video',
              component:res=>require(['../pages/index/center/ICvide.vue'],res)
            },
            {
              path:'/',
              redirect:'music'
            }
          ]
        },
        {
          path:'right',
          component:res=>require(['../pages/index/right.vue'],res)
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
