<template lang='jade'>
.centerVideo
  .box
    section(v-for='item in video')
      my-video(v-bind:sources='item.source' v-bind:options='item.options')
      .clearfix.warpper
        .title
          | 宫老爷子真是敬业，动画配音都要亲临现场
        .btn
          span(@click='thumbsUp')
            i(class='icon iconfont icon-LAUNCH')
            span  255
          span(@click='comment')
            i(class='icon iconfont icon-MAIL')
            span 86
          span(@click='share')
            i(class='icon iconfont icon-SHARE')
            span 分享  
</template>
<script>
  import myVideo from 'vue-video';
  import {MessageBox} from 'mint-ui';
  class Source {
    constructor(obj={src: 'https://fsd'}) {
      this.sourceUnit = {};
      this.source=[];
      this.sourceUnit.src = obj.src;
      this.sourceUnit.type = this.changType();
      this.source.push(this.sourceUnit);
    }
    changType() {
      return this.source.type = 'video/mp4';
    }
  };
  class Options extends Source {
    constructor(obj={auto:true,poster:'https://',src:'http://covteam.u.qiniudn.com/oceans.mp4'}){
      super(obj);
      this.options={};
      this.defineAuto(obj.auto);
      this.definePoster(obj.poster);
      this.options.volume='0.7';
    }
    defineAuto(aaa){
      return this.options.autoplay=aaa
    }
    definePoster(aaa){
      return this.options.poster=aaa
    }
  }
  export default {
    created() {
      let a = new Options();
      console.log(a);

    },
    data(){
      return {
        video:[
          new Options(),new Options(),new Options(),new Options(),new Options(),
        ]
      }
    },
    components:{myVideo},
    methods:{
      thumbsUp(e){

        MessageBox.alert('点赞成功！').then(()=>{
          e.target.innerText?e.target.innerText=Number(e.target.innerText)+1:e.target.nextSibling.innerText=Number(e.target.nextSibling.innerText)+1;
        })
      },
      comment(){

      },
      share(){

      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../../style/mixin'

.centerVideo
  height 100%
  overflow auto
  .box
    height auto
    >section
      >div.warpper
        height 70px
        padding 10px 10px
        >div
          height 100%
        .title
          font-size 16px
          float left
          width 60%
          line-height 24px
        .btn
          @extend .d-f-j
          >span
            font-size 10px
            text-align center
            flex 1
            i
              display block
              font-size 24px
</style>
