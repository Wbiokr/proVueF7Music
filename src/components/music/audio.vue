<template lang='jade'>
  div.audio   
    audio(:src='music'  controls loop ref='audio') 您的浏览器不支持audio标签
    slot
</template>
<style lang="stylus">
  .audio
    display block
</style>
<script>
  // import vList from '../components/music/list.vue';
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
    },
    watch:{
      isPlay(newV,oldV){
        console.log(newV,oldV);
        if(newV){
          this.$refs.audio.play()
        }else{
          this.$refs.audio.pause()
        }
      }
    }
  }
</script>