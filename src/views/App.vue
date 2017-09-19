<template lang='jade'>
  .app
    vHeader
    .content
      router-view 
    vFooter
</template>
<script>
  import vHeader from '../components/Header.vue';
  import vFooter from '../components/Footer.vue';

  export default{
    components:{vHeader,vFooter}
  }
</script>
<style lang="stylus">
  body
    background rgba(240,240,240,.9)
    // height 2000px

</style>