<template lang='jade'>
  .search
    .searchBar
      input(type='text' placeholder='请输入歌曲/歌手名字' v-model='searchTxt' ref='sear')
      button(@click.stop='cancel') 
        i(class='icon iconfont icon-CLOSE')
        | 取消
    section.hotWord
      h4
        | 热门搜索
      mt-badge(class='badge' size='normal' color='transparent' v-for='item in hotwords' ) {{item}}
    section.historyWord
      h4
        | 历史搜索---{{author}}
      ul 
        li( class='cell' v-for='(item,index) in historyWords' ref='historyItems') 
          span  {{item}}
          i(class='iconfont icon-CLOSE' @click='close(index)')
</template>
<style lang="stylus">
@import '../../style/mixin'
  .search
    position fixed
    z-index 1
    top 0
    width 100%
    height 100%
    // background rgba(250,250,250,1)
    background _b-c-f
    padding 5px
    h4
      font-size 16px
      color #666
      font-weight 500
    >section
      padding 30px 10px 0
      // padding-
    .historyWord
      ul
        padding-top 10px
        li
          line-height 54px
          height 40px
          font-size 14px
          border-bottom 1px solid #dedede
          color #666
          padding 0 10px
          display flex  
          justify-content space-between
          *
            // flex 0
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
        aaa: 'aaa',
        searchTxt: '',
        hotwords: ['天空之城', '李志', '关于郑州的记忆', '成都', '三十岁的女人', '许巍'],
        historyWords: ['李志', '赵雷', '许巍', '离婚', '梵高先生', '你是浪子，别泊岸']
      }
    },
    methods: {
      cancel() {
        this.$store.commit('changeSearchBool', false)
      },
      close(i) {
        console.log(this.$refs.historyItems[i])
        this.historyWords.splice(i,1)
      }
    },
    computed: {
      author() {
        return this.$store.state.author;
      }
    }
  }
</script>