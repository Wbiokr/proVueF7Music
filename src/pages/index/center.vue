<template lang='jade'>
  .indexCenter
    slot 
    nav
      router-link(:to="routerName('music')" tag="a" active-class='active') 
        | 音乐
      router-link(:to="routerName('video')" tag="a" active-class='active') 
        | 视频
      router-link(:to="routerName('audio')" tag="a" active-class='active')
        | 电台 
    router-view 
</template>
<script>
  import {myMx} from  '../../mixin/component.js';
  const vm={
    mixins:[myMx],
    created(){
      this.setTitle('index~center');
    }
  };
  export default vm;
</script>
<style lang='stylus' scoped>
  @import '../../style/mixin'

  .indexCenter
    w-h(100%)
    position relative
    padding-top _h-l
    background darken(#fff,2%)
    >nav
      position absolute
      height @padding-top
      top 0
      left 0
      width 100%
      padding 0 40px
      @extend .d-f-j
      align-items center
      background darken(#fff,0)
      >a
        @extend .f-1-c
        margin 0 20px
        color _b-f-6
</style>
