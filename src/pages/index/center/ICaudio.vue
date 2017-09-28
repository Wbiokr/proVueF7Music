<template lang='jade'>
  .centerAudio
    slot
    v-swiper
    icon-item(:title='title' v-bind:cname='"yes"')
</template>
<script>
  import vSwiper from '../../../components/swiper/mtSwiper.vue';
  import iconItem from '../../../components/swiper/iconItem.vue';
export default {
    components:{vSwiper,iconItem},
    name:'icaudio',
    data(){
      return {
        title:[
          {
            icon:'GRID',
            val:'电台分类'
          },
          {
            icon:'STAR',
            val:'电台排行'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../../style/mixin'
  .iconItem
    li
      border-right 1px solid #ccc
      @extend .b-l
</style>
