<template lang=''>
    <carousel :indicators="true" :auto="3000" @onSlideEnd='endcall'>
        <div v-for="i in 3">carousel-item-{{i-1}}</div>
    </carousel>
</template>
<script>
import Carousel from 'vue-m-carousel'
  export default {
    components: {
      Carousel
    },
    data() {
      return {
        
      }
    },
    methods: {
      endcall(){
        console.log(2121)
      }
    }
  }
</script>