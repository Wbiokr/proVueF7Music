<template lang='jade'>
  #index
    .header
      vHeader
    .content
      router-view
    .footer
      vFooter
    .setting
      vSetting
</template>
<script>
  import vHeader from '../components/layout/Header.vue';
  import vFooter from '../components/layout/Footer.vue';
  import vSetting from '../components/left/menue.vue';
  export default {
    components:{vHeader,vFooter,vSetting}
  }
</script>
<style lang="stylus" scoped>
  .content
    padding 60px 0 70px
</style>
