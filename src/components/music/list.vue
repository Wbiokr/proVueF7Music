<template lang="jade">
  .musicList(v-if='songList&&songList.length>0&&isListObs')
    .listBg(@click='downList')
    .listContent
      h4
        p.playmode
          i(class='iconfont icon-GRID')
          | 列表循環({{num}})
        p.add
          i(class='icon iconfont icon-MAGNIFYINGGLASSPLU')
          | 收藏
        p.clear
          i(class='icon iconfont icon-TRASHBIN' @click.stop='deleteItem(0,true)')
          | 清空
      div  
        ul
          li(v-for='(item,index) of songList')
            span {{item}}
            i(class='iconfont icon-CLOSE' @click.stop='deleteItem(index)')
</template>
<style lang="stylus" scoped>
  .musicList
    height 100%
    width 100%
    position fixed
    top 0
    left 50%
    transform translate(-50%)
    z-index 51
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
    // max-height 65%
    box-sizing border-box
    background rgba(255,255,255,1)
    // overflow auto
    // &::-webkit-scrollbar
    //   display none 
    >*
      padding 0 10px
    h4
      // position fixed
      bottom 0
      width 100%
      font-weight 500
      line-height 52px
      border-bottom 1px solid #dedede
      display flex
      justify-content space-around
      .playmode
        flex 1
      .add
        margin-right 30px  
    div  
      max-height 380px
      overflow auto
      &::-webkit-scrollbar
        display none 
      ul
        // padding 0 0 70px 0
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
        return this.$store.state.music.musicList;
      },
      isListObs(){
        return this.$store.state.music.isListObs;
      }
    },
    methods:{
      deleteItem(i,isClear){
        let num=isClear?this.songList.splice(0,this.songList.length):this.songList.splice(i,1);
        // this.songList.splice(i,1);
        this.$store.commit('changeMusic',['musicList',this.songList])
      },
      downList(){
        this.$store.commit('changeMusic',['isListObs',false])
      }
    }
  }
</script>

