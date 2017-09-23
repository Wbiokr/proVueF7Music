<template lang='jade'>
  //- div.leftSetting 
  .zezhao(:class='setting.stCurrent' @click.stop='cacelSetting') 
    .wrapper(:class='setting.stCurrent' @click.stop='cacelSetting(1)')
      header
        dl
          dt
           img(src='../../img/left_header.jpg')
          dd
            p
              | 和你同路
              mt-badge(class='bdgeL') Lv7 
            p
              mt-badge 签到 
      section
        .msg
          ul
            li(v-for='item in setting.msg')
              | {{item.value}}
        .position
          ul
            li(v-for='item in setting.position')
              | {{item.value}}
        .other
          ul
            li(v-for='item in setting.other')
              | {{item.value}}
      footer
</template>
<style lang="stylus" scoped>
@import '../../style/mixin';
  .leftSetting

  .zezhao
    height 100%
    width 100% 
    position fixed
    visibility hidden
    background rgba(0,0,0,0)
    z-index 53
    top 0 
    left 0
    transition all linear .2s
    &.current
      visibility visible
      background rgba(0,0,0,0.5)
      
      transition all linear .5s
  .wrapper
    transform translateX(-100%)
    position fixed
    z-index 55
    left 0
    top 0
    width 80%
    height 100%
    background #dedede
    box-shadow 0 0 100px 1px rgba(255,255,255,.4)
    transition all ease .3s
    display flex
    flex-direction column
    &.current
      transform translateX(0)
      transition all ease .4s 
    >header
      width 100%
      height 200px
      background url('../../img/left_bg.jpg')  
      background-size 100% 
      flex 1
      dl
        // position 
        // width 
        w-h(100%)
        // padding-top 80px
        padding 75px 15px 0
        background rgba(255,255,255,.1) 
        dt
          img 
            b-r-5(80px)
        dd
          display flex
          justify-content space-between
          color rgba(255,255,255,.8)
          padding-top 10px
          .bdgeL
            margin-left 10px
    >footer
      position fixed
    >section
      // padding 20px 10px
      .position ul
        margin 5px 0
      ul
        // padding 10px 0 
        
        li
          line-height 40px
          background #fff
          padding 0 15px
          b-b-1()
          // &:first-child
          //   margin-top 10px
      
</style>
<script>
  export default{
    data(){return{}},
    computed:{
      setting(){
        return this.$store.state.setting
      }
    },
    methods:{
      cacelSetting(lock){
        console.log(lock)
        if(lock===1) return ;
        this.$store.commit('changeCommon',['setting','stCurrent',' '])
      }
    }
  }
</script>
