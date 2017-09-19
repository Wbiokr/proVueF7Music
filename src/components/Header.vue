<template lang='jade'>
  mt-header
    router-link(to="/" slot="left")
      mt-button(icon="back") 返回
    
    mt-button(icon="search" slot="right" @click='handleClose')
</template>

<script>
  import {
    Toast,
    button,
    MessageBox
  } from 'mint-ui';
  export default {
    methods: {
      handleClose() {
        // Toast({
        //   message:'fsdafs'
        // })
        MessageBox({
          title: 'nnn',
          message: 'fsafsa',
          showCancelButton: true
        })
      }
    }
  }
</script>