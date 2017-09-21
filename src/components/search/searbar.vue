<template lang='jade'>
  .search
    .searchBar
      input(type='text' placeholder='请输入歌曲/歌手名字' v-model='searchTxt')
      button(@click.stop='cancel') 
        i(class='icon iconfont icon-CLOSE')
        | 取消
    section.hotWord
      h4
        | 热门搜索
      mt-badge(class='badge' size='normal' color='transparent' v-for='item in hotwords') {{item}}
    section.historyWord
      h4
        | 历史搜索---{{author}}
      mt-cell( class='cell' v-for='item in historyWords' ) 
        | {{item}}
</template>
<style lang="stylus">
  .search
    position fixed
    z-index 1
    top 0
    width 100%
    height 100%
    background rgba(250,250,250,.7)
    padding 5px
    h4
      font-size 14px
      color #666
      font-weight 500
    >section
      padding 30px 10px 0
      // padding-
    .hotWord
      // padding-top 10px
      .badge
        margin-right 15px
        margin-top 10px
        padding 3px 6px 5px
        color rgba(0,0,0,.6)
        border 1px solid #ccc
        // padding-bottom 4px
        // pad
    .searchBar
      display flex
      position relative
      input
        font-size 16px       
        border 0
        height 40px
        flex 1
        border-radius 5px
        // background #eee
        padding-left 10px
        padding-right 70px
        border-bottom 1px solid #ccc
      button 
        // margin-left -100px
        font-size 16px 
        position absolute
        right 10px
        top 50%
        transform translateY(-50%)
        background transparent
        >i
          // float left
</style>
<script>
  export default {
    data() {
      return {
        searchTxt: '',
        hotwords: ['天空之城', '李志', '关于郑州的记忆', '成都', '三十岁的女人', '许巍'],
        historyWords:['李志','赵雷','许巍','离婚','梵高先生','你是浪子，别泊岸']
      }
    },
    methods: {
      cancel() {
        console.log(21212)
      }
    },
    computed:{
      author(){
        return this.$store.state.author;
      }
    }
  }
</script>