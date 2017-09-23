<template lang='jade'>
    div
      router-view 
      vAudio
        p 您的浏览器可能会不支持audio标签
      //- audio(:src='music' autoplay='false' controls loop) 您的浏览器不支持audio标签
      vList
</template>

<style lang="stylus">
  body
    background rgba(240,240,240,.9)
    max-width 750px
    *
      max-width 750px
</style>
<script>
  import vList from '../components/music/list.vue';
  import vAudio from '../components/music/audio.vue';
  export default{
    data(){return{}},
    components:{vList,vAudio},
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