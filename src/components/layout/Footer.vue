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
    mounted() {
      let canvas = this.$refs.canvas;
      this.dom = canvas.getContext('2d');
      this.$nextTick(this.drawInit(this.dom));
      // let canvas=this.dom;
      let width = canvas.width,
        height = canvas.height;
      if (window.devicePixelRatio) {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.height = height * window.devicePixelRatio;
        canvas.width = width * window.devicePixelRatio;
        this.dom.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    },
    methods: {
      drawInit(ctx) {
        ctx.clearRect(0, 0, 50, 50);
        this.drawDuration(ctx);
        this.togglePlay(ctx);
        this.drawProgress(ctx);
      },
      drawPause(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = '#666';
        ctx.clearRect(12, 12, 18, 18);
        ctx.beginPath();
        ctx.moveTo(17, 13);
        ctx.lineTo(17, 28);
        ctx.lineTo(28, 21);
        ctx.lineTo(17, 13);
        ctx.stroke();
        ctx.closePath();
      },
      drawPlay(ctx) {
         ctx.beginPath();
        ctx.strokeStyle = '#f00';
        ctx.clearRect(12, 12, 18, 18);
        ctx.beginPath();
        ctx.moveTo(17,15);
        ctx.lineTo(17,26);
        ctx.moveTo(24,15);
        ctx.lineTo(24,26)
        ctx.stroke();
        ctx.save();
        ctx.closePath();
      },
      drawDuration(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = '#666';
        ctx.lineWidth=1;
        ctx.arc(20, 20, 19, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        // ctx.strokeStyle='#ff543c';
        // ctx.arc(20,20,19,0,2*Math.PI*0.2);
        // ctx.stroke();
      },
      drawProgress(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = '#ff543c';
        ctx.lineWidth = 2;
        // ctx.translate(0.5,0.5);
        ctx.arc(20, 20, 19, 0, 2 * Math.PI * this.progress);
        ctx.stroke();
        ctx.closePath();
      },
      togglePlay() {
        this.$store.commit('changeMusic', ['isPlay', !this.$store.state.music.isPlay])
        if (this.play) {
          this.drawPlay(this.dom);

        } else {
          setTimeout(()=>{
            
            this.drawPause(this.dom);
          },10)
        }
      },
      toggleList() {
        this.$store.commit('changeMusic', ['isListObs', true])
      }
    },
    watch: {
      progress(newV, oldV) {
        if (newV == 0) {
          this.drawInit(this.dom);
          return ;
        };

        this.dom.clearRect(0,0,50,50);
        this.drawDuration(this.dom);
        this.drawProgress(this.dom);
        this.drawPlay(this.dom);
      }
    },
    computed: {
      progress() {
        return this.$store.state.music.progress;
      },
      play() {
        return this.$store.state.music.isPlay;
      }
    }
  }
</script>