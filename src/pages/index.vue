<template lang='jade'>
  #index
    .header
      vHeader
    .content
      router-view
    .footer
      vFooter
</template>
<script>
  import vHeader from '../components/layout/Header.vue';
  import vFooter from '../components/layout/Footer.vue';

  export default {
    components:{vHeader,vFooter}
  }
</script>
<style lang="stylus" scoped>
  .content
    padding 60px 0 70px
</style>
