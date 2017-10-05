<template lang='jade'>
  #index
    .header
      vHeader
    .content(@click='action')
      router-view
    .footer
      vFooter(ref='footer')
    .setting
      vSetting
</template>
<script>
  import vHeader from '../components/layout/Header.vue';
  import vFooter from '../components/layout/Footer.vue';
  import vSetting from '../components/left/menue.vue';
  export default {
    components:{vHeader,vFooter,vSetting},
    methods:{
      action(){
        console.log(this.$refs)
          this.$refs.footer.$emit('footer')       
          // this.$refs.footer.$emit('footer')
          // this.$children[2].footerInfor();
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #index
    height 100%
    .content
      padding 60px 0 70px
      height @height
</style>
