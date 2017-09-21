<template lang='jade'>
  .header(:class="{'e32':!isSearch}")
    mt-header(title='' class='headeBar e32' v-show='!isSearch')
      mt-button(icon="icon iconfont icon-HAMBURGERMENU" slot='left' class='setting')
      mt-button(icon="search" slot="right" @click='search')
    nav(v-show='!isSearch')
      router-link(to="/") 
        i(class='icon-MUSIC iconfont')
      router-link(to='/home/') 
        i(class='iconfont icon-SPEAKER')
      router-link(to='/home/') 
        i(class='iconfont icon-DISPLAY')
    vSearch(v-if='isSearch')    
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
        color #fff
        
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
      }
    },
    computed:{
      isSearch(){
        return this.$store.state.isSearch;
      }
    }
  }
</script>