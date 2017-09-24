import Vue from 'vue';
Vue.mixin({
  mounted(){
    console.log(`您现在的页面是：${location.pathname}`)
  },
  methods:{
    setTitle(val){
      document.title=`页面---${val}`
    }
  }
})