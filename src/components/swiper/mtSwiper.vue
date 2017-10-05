<template lang='jade'>
  carousel(:indicators="true" v-bind:auto="3000" @onSlideEnd='endcall' )
    div(:key='i' v-for="i in banner"  class='swip-item' ) 
      img(:src="i") 
</template>
<script>
  import Carousel from 'vue-m-carousel';
  import img0 from './img/swip_0.jpg';
  import img1 from './img/swip_1.jpg';
  import img2 from './img/swip_2.jpg';
  import img3 from './img/swip_3.jpg';
  export default {
    components: {
      Carousel
    },
    data() {
      return {
        banner:[
          img0,img1,img2,img3
        ]
      }
    },
    methods: {
      endcall() {
        // console.log(2121)
      }
    },
    mounted(){
      [...document.querySelectorAll('.carousel-dot')].map(v=>v.innerHTML='')
    }
  }
</script>
<style lang="stylus">
  .carousel-dot
    // color orange
    // content ''
    border-radius 50%
    transform  scale(.8)
  .swip-item
    width 100%
    img
      width 100%
      height 100%
      margin-top -20px
</style>