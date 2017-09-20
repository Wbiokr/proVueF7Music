<template lang='jade'>
  .header.e32
    mt-header(title='' class='headeBar e32')
      router-link(to="/" slot="left")
        mt-button(icon="back") 返回
      mt-button(icon="search" slot="right" @click='handleClose')
    nav
      router-link(to="/") 
        i(class='icon-MUSIC iconfont')
      router-link(to='/home/') 
        i(class='iconfont icon-SPEAKER')
      router-link(to='/home/') 
        i(class='iconfont icon-DISPLAY')
        
</template>
<style lang="stylus">
  .header
    height 60px
    position fixed 
    top 0
    width 100%
    // padding-top 20px
    .headeBar
      height 100%
    nav
      position fixed
      top 0
      left 50%
      transform translateX(-50%)
      height inherit
      width 30%
      display flex
      flex-wrap nowrap
      justify-content space-around
      align-items center
      a
        flex 0
        font-size 22px
        color #fff
        
</style>
<script>
  import {
    Toast,
    button,
    MessageBox
  } from 'mint-ui';
  export default {
    data(){
      return{
        aaa:'<span>121</span><span>13123123</span><span>2dsdfsddd</span>'
      }
    },
    methods: {
      handleClose() {
        // Toast({
        //   message:'fsdafs'
        // })
        this.$router.push({
          path:'/playing'
        })
        MessageBox({
          title: 'nnn',
          message: 'fsafsa',
          showCancelButton: true
        })
      }
    }
  }
</script>