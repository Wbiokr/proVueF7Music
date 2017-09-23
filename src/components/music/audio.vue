<template lang='jade'>
  div.audio   
    audio(:src='music'  controls loop ref='audio' ontimeupdate='change') 您的浏览器不支持audio标签
    slot
</template>
<style lang="stylus">
  .audio
    display block
</style>
<script>
  // import vList from '../components/music/list.vue';
  function change(){
    console.log(document.querySelector('audio').currentTime)
  }
  export default{
    data(){return{}},
    // components:{vList},

    computed:{
      music(){
        return this.$store.state.music.musicFormatSrc;
      },
      autoPlay(){
        return this.$store.state.music.isAutoPlay;
      },
      isPlay(){
        return this.$store.state.music.isPlay;
      }
    },
    mounted(){
      this.isPlay?this.$refs.audio.play():this.$refs.audio.pause();
      this.rangeChagne();
    },
    watch:{
      isPlay(newV,oldV){
        if(newV){
          this.$refs.audio.play()
        }else{
          this.$refs.audio.pause()
        };
        console.log(this.$refs.audio.currentTime)
      }
    },
    methods:{
      timeupdate(){
        console.log(this.$refs.audio.currentTime)
      },
      rangeChagne(){
        console.log(this.$refs.audio.currentTime)
      }
    }
  }
</script>