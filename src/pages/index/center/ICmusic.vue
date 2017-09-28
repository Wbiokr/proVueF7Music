<template lang='jade'>
  .centerMusic
    slot
    v-swiper
    iconItem(:title='title')
</template>
<script>
  import vSwiper from '../../../components/swiper/mtSwiper.vue';
  import iconItem from '../../../components/swiper/iconItem.vue';

  export default {
    components:{vSwiper,iconItem},
    data(){
      return {
        title:[
          {
            icon:'DISPLAY',
            val:'私人FM'
          },
          {
            icon:'MINIMIZE',
            val:'每日推荐'
          },
          {
            icon:'MUSIC',
            val:'歌单'
          },
          {
            icon:'STATISTICS',
            val:'排行榜'
          },
        ],
        
      }
    },
    
    methods:{
      
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../../style/mixin'

</style>
