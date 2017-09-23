<template lang='jade'>
  .indexLeft
    section.content
      ul
        router-link(to='/localSong' tag='li')
          | 本地音乐
        router-link(to='/historyPlay' tag='li')
          | 最近播放
        router-link(to='/downSong' tag='li')
          | 下载管理
        router-link(to='/myCollect' tag='li')
          | 我的收藏 
    section.list
      .myCreated
        h3(:class='{current:isCurrent[0]}' @click='isCurrent[0]=!isCurrent[0]' ) 
          i(class='icon iconfont icon-ARROW')
          span 创建的歌单
          i(class='iconfont icon-SETTINGS')
        ul(:class='{current: isCurrent[0]}')
          li 我喜欢的音乐
          li 我喜欢的音乐
          li 我喜欢的音乐
      .myCollected
        h3(:class='{current:isCurrent[1]}' @click='isCurrent[1]=!isCurrent[1]' ) 
          i(class='icon iconfont icon-ARROW')
          span 收藏的歌单
          i(class='iconfont icon-SETTINGS')
        ul(:class="[isCurrent[1]?'current':'']")
          li 李志-北京不插电
          li 许巍-此时此刻
          li 赵雷-成都酒馆
</template>
<script>
  export default {
    data() {
      return {
        isCurrent: {
          0:false,
          1:false
        }
      }
    },
    methods: {
      toggleList() {
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../style/mixin'
  .indexLeft
    .content
      ul 
        padding-left 30px
        font-size 18px
        li
          line-height 50px
          b-t-1()
          @extend .b-f
    .list
      background _b-c
      h3
        padding-left 10px
        line-height 30px
        font-size 13px
        font-weight 500
        padding-right 10px
        color _b-f-6
        @extend .d-f-j
        &.current
          i:first-child
            @extend .i-t-r
        span
          flex 1
          padding-left 10px
        i
          font-size 22px
          transform rotate(0)
          transition all ease .3s
          // &:first-child
            
      ul
        display none
        background _b-c-f
        &.current
          display block
        li
          line-height 40px
          padding-left 40px
</style>
