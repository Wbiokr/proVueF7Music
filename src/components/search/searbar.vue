<template lang='jade'>
  .search
    .searchBar
      input(type='text')
      button 取消
</template>
<style lang="stylus">
  .search
    position fixed
    z-index 1
    top 0
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    .searchBar
      padding 5px
      display flex
      position relative
      input
        border 0
        height 40px
        flex 1
        border-radius 5px
      button 
        // margin-left -100px
        position absolute
        right 10px
        top 50%
        transform translateY(-50%)
</style>
<script>
  export default{
    methods:{
      data(){
        return{
          value:'天空之城'
        }
      },
      cancel(){
        console.log(21212)
      }
    }
  }
</script>