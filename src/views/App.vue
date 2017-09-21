<template lang='jade'>
    div
      router-view 
      audio(:src='music' autoplay='false' controls loop) 您的浏览器不支持audio标签
      vList
</template>

<style lang="stylus">
  body
    background rgba(240,240,240,.9)
</style>
<script>
  import vList from '../components/music/list.vue';
  export default{
    data(){return{}},
    components:{vList},
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