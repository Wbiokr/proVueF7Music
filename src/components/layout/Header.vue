<template lang='jade'>
  .header(:class="{'e32':!isSearch}")
    mt-header(title='' class='headeBar e32' v-show='!isSearch')
      mt-button(icon="icon iconfont icon-HAMBURGERMENU" slot='left' class='setting' @click='setting')
      mt-button(icon="search" slot="right" @click='search')
    nav(v-show='!isSearch')
      router-link(to="/index/left" active-class='active') 
        i(class='icon-MUSIC iconfont')
      router-link(to='/index/center' active-class='active') 
        i(class='iconfont icon-SPEAKER')
      router-link(to='/index/right' active-class='active') 
        i(class='iconfont icon-DISPLAY')
    vSearch(v-if='isSearch')    
</template>
<style lang="stylus" scoped>
  @import '../../style/mixin'
  .header
    height 60px
    position fixed 
    top 0
    width 100%
    z-index 1
    // padding-top 20px
    .headeBar
      height 100%
      .setting
        font-size 20px
        margin-top -4px
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
        color _b-c-f
        transition color ease .37s
        &.active
          color _b-c-a
          font-weight 800
</style>
<script>
  import {
    Toast,
    button,
    MessageBox
  } from 'mint-ui';

  import vSearch from '../search/searbar.vue';

  export default {
    components:{vSearch},
    data(){
      return{
        // isSearch:false
      }
    },
    methods: {
      search(){
        this.$store.commit('changeSearchBool',true)
      },
      setting(){
        console.log(this.$store.state.setting.stCurrent)
        this.$store.commit('changeCommon',['setting','stCurrent','current'])
      }
    },
    computed:{
      isSearch(){
        return this.$store.state.isSearch;
      }
    }
  }
</script>