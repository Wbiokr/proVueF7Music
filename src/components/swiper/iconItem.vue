<template lang="jade">
  ul(class='iconItem')
      li(v-for='item in title' @click.stop.prevent='goFM' v-bind:class='cname')
        i(class='icon iconfont' v-bind:class='item.icon|toIcon' )
        span(v-text='item.val')
</template>
<style lang="stylus" scoped>
@import '../../style/mixin'
  ul.iconItem
      @extend .d-f-j
      padding 20px 0
      b-t-c(_b-c-a)
      li
        @extend .f-1-c
        &.yes
          border-right 1px solid _b-c-a
          @extend .b-l
          text-align center
          height 40px
          >*
            font-size 42px
            @extend .m-0-p-0
            line-height 40px
            float left
            margin 0 auto
          i
            @extend .b-0
            margin-left 13%
          span
            font-size 20px
        i
          // font-size 20px
          @extend .m-a
          // w-h(40px)
          color _f-3-c
          font-size 30px
          b-r-5(40px)
          b-1(@color)
          padding-top 5px
        span
          color darken(_b-c,38)
          margin-top 10px
          @extend .m-a
</style>
<script>
  export default {
    props:{
      "title":{
        type:Object,
        default:null
      },
      "cname":{
        type:String,
        default:'no'
      }
    }
  }
</script>
