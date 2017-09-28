<template lang='jade'>
  .centerVideo
    //- section(v-for='item in source')
      //- video()
    my-video(v-bind:sources='video.source' v-bind:options='video.options')
</template>
<script>
  import myVideo from 'vue-video';
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
        video:new Options(),
      }
    },
    components:{myVideo}
  }
</script>