import Vue from 'vue';
// import vSwiper from '../../../components/swiper/mtSwiper.vue';
import {Indicator,Toast} from 'mint-ui';
Vue.mixin({
  mounted(){
    console.log(`您现在的页面是：${location.pathname}`)
  },
  data(){
    return {
      toast:null
    }
  },
  methods:{
    setTitle(val){
      document.title=`页面---${val}`
    },
    goFM(e){
      Indicator.open({
        text:'请求数据中...',
        spinnerType:'fading-circle'
      });
      setTimeout(()=>{
        Indicator.close();
        if(this.toast) this.toast.close();
        this.toast=Toast({
          message:txt,
           iconClass: 'icon icon-error',
           duration:2000,
           position:'middle',
        })
      },300);
      // if(e.target.innerHTML)
      let txt='';
      e.target.innerHTML?txt=`${e.target.innerHTML}暂未推出！`:txt=`${e.target.nextSibling.innerHTML}暂未推出！`;
    }
  },
  filters:{
    toIcon(val){
      return `icon-${val}`;
    }
  },
})