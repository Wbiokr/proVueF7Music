<template lang='jade'>
    div.audio   
      audio(:src='music' autoplay='false' controls loop) 您的浏览器不支持audio标签
</template>
<style lang="stylus">
  .audio

</style>
<script>
  // import vList from '../components/music/list.vue';
  export default{
    data(){return{}},
    // components:{vList},
    computed:{
      music(){
        return this.$store.state.music.musicFormatSrc
      },
      autoPlay(){
        return this.$store.state.music.isAutoPlay
      }
    }
  }
</script>