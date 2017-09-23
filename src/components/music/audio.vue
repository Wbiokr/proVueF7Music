<template lang='jade'>
  div.audio   
    audio(:src='music'  controls loop ref='audio' ) 您的浏览器不支持audio标签
    slot
</template>
<style lang="stylus">
  .audio
    display block
</style>
<script>
  // import Vue from 'vue';
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
      // this.rangeChagne();
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
        this.$refs.audio.addEventListener('timeupdate',()=>{
          let currentTime=this.$refs.audio.currentTime;
          let duration=this.$refs.audio.duration;
          let progress=Number(currentTime)/Number(duration);
          // console.log(progress*100+'%');
          this.$store.commit('changeMusic',['progress',progress])
        })
      },

    }
  };
  export default vm;
</script>