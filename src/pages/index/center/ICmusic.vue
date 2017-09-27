<template lang='jade'>
  .centerMusic
    slot
    v-swiper
</template>
<script>
  import vSwiper from '../../../components/swiper/mtSwiper.vue';

  export default {
    components:{vSwiper},
    data(){
      return {

      }
    }
  }
</script>