<template lang='jade'>
    div(style='height:100%')
      router-view 
      vAudio
        p 您的浏览器可能会不支持audio标签
      vList
</template>

<style lang="stylus">
  body
    background rgba(240,240,240,.9)
    max-width 750px
    height 100%
    *
      max-width 750px
    div
      // height 100%
</style>
<script>
  import vList from '../components/music/list.vue';
  import vAudio from '../components/music/audio.vue';
  import {Toast} from 'mint-ui';
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
    },
    mounted(){
      Toast({
        message:'welcome to come here !',
        position:'center',
        duration:2000
      })
    }
  }
</script>