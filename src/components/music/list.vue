<template lang="jade">
  .musicList
    .listBg
    .listContent
      h4
        p.playmode
          i(class='iconfont icon-GRID')
          | 列表循環({{num}})
        p.add
          i(class='icon iconfont icon-MAGNIFYINGGLASSPLU')
          | 收藏
        p.clear
          i(class='icon iconfont icon-TRASHBIN')
          | 清空
      ul
        li(v-for='item of songList')
          span {{item}}
          i(class='iconfont icon-CLOSE')
</template>
<style lang="stylus" scoped>
  .musicList
    height 100%
    width 100%
    position fixed
    top 0
    left 50%
    transform translate(-50%)
  .listBg
    height  100%
    width 100%
    background rgba(0,0,0,.45)
    position fixed
    top 0
    left 50%
    transform translateX(-50%)
    z-index 50
  .listContent
    position fixed
    z-index 51
    bottom 0
    width 100%
    max-height 65%
    box-sizing border-box
    background rgba(255,255,255,1)
    // padding 0 10px
    >*
      padding 0 10px
    h4
      font-weight 500
      line-height 52px
      border-bottom 1px solid #dedede
      display flex
      justify-content space-around
      .playmode
        flex 1
      .add
        margin-right 30px  
    ul
      padding 5px 0
      li
        padding 0 10px
        line-height 45px
        border-bottom 1px solid #dedede
        display flex
        justify-content space-between
        // >*
</style>
<script>
  export default{
    computed:{
      num(){
        return 45
      },
      songList(){
        return ['關於鄭州的記憶','天空之城','故鄉','沒有寄出的信','關於鄭州的記憶','天空之城','故鄉','沒有寄出的信','關於鄭州的記憶','天空之城','故鄉','沒有寄出的信']
      }
    }
  }
</script>

