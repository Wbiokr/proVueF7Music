<template lang='jade'>
  .footer
    mt-tabbar(class='footBox' fixed)
      router-link(to='/playing' class='musicWrapper' tag='div')
        section.left 
          ul
            li
              img(src='../../img/QQ截图20170920114146.png')
            li.music
              p.song 山阴路的夏天
              p.singer 李志
        section.right 
          ul
            li
              canvas(width=40 height=40 ref='canvas' @click.stop='togglePlay')
            li.icon
              i(class='iconfont icon-ALIGNLEFT' @click.stop='toggleList')
</template>
<style lang="stylus" scoped>
  .footer
    position fixed
    z-index 10
  .footBox
    background #fff
    box-shadow 0 0px 46px 0px rgba(0,0,0,.12)
    .musicWrapper
      height 100%
      width 100%
      height 70px
      background #fff
      display flex
      justify-content space-between 
      >section
        flex 0
        &.right
          ul li 
            margin 0 5px
            i
              font-size 38px
              color #444
          // .icon
          //   width 20px
          //   height 20px
        &.left
            flex 1
            ul
              justify-content left
              li
                flex 0
                margin-left 10px
                &.music
                  flex 1
                  p
                    text-align left
                  .song
                    color #222
                    font-size 19px
                    line-height 30px
                  .singer
                    color #555
                    line-height 26px
        ul
          display flex
          justify-content right
          align-items center
          height 100%
          
          li
            flex 1
            img
              width 55px
              height 55px
</style>
<script>
  export default {
    data() {
      return {
        dom: null,
        // play: true
      }
    },
    computed:{
      play(){
        return this.$store.state.music.isPlay;
      }
    },
    mounted() {
      let canvas = this.$refs.canvas;
      this.dom = canvas.getContext('2d');
      this.drawInit(this.dom)
    },
    methods: {
      drawInit(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = '#666';
        ctx.arc(20, 20, 19, 0, 2 * Math.PI);
        ctx.stroke();
        this.drawPlay(ctx);
      },
      drawPause(ctx) {
        ctx.clearRect(12, 12, 18, 18);
        ctx.beginPath();
        ctx.moveTo(17, 13);
        ctx.lineTo(17, 28);
        ctx.lineTo(28, 21);
        ctx.lineTo(17, 13);
        ctx.stroke();
      },
      drawPlay(ctx) {
        ctx.clearRect(12, 12, 18, 18);
        ctx.beginPath();
        ctx.strokeRect(15, 15, 11, 11);
      },
      togglePlay() {
        // this.play = !this.play;
        this.$store.commit('changeMusic',['isPlay',!this.$store.state.music.isPlay])
        if (this.play) {
          this.drawPlay(this.dom);
        } else {
          this.drawPause(this.dom);
        }
      },
      toggleList() {
        this.$store.commit('changeMusic', ['isListObs', true])
      }
    }
  }
</script>