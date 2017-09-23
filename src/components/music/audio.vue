<template lang='jade'>
  div.audio   
    audio(:src='music'  controls loop ref='audio' ) 您的浏览器不支持audio标签
    slot
</template>
<style lang="stylus">
  .audio
    display none
</style>
<script>
  const vm={
    data(){return{}},
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
    created(){
      },
    mounted(){
      this.isPlay?this.$refs.audio.play():this.$refs.audio.pause();
      this.$nextTick(this.rangeChagne());
    },
    watch:{
      isPlay(newV,oldV){
        if(newV){
          this.$refs.audio.play()
        }else{
          this.$refs.audio.pause()
        };
      }
    },
    methods:{
      rangeChagne(){
        this.$refs.audio.addEventListener('timeupdate',()=>{
          let currentTime=this.$refs.audio.currentTime;
          let duration=this.$refs.audio.duration;
          let progress=Number(currentTime)/Number(duration);
          if(progress>=1){
            progress=0;
          }
          this.$store.commit('changeMusic',['progress',progress])
        })
      },

    }
  };
  export default vm;
</script>