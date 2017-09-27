<template>
  
<ul>
    <li v-for='item in zzz'>
      {{item.val}}
      <!-- {{item.aaa}} -->
      <tree-meun   :zzz='item.aaa'></tree-meun>
      
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['zzz'],
    name:'treeMeun'
  }
</script>
<style lang="stylus">
  ul,li
    padding 10px 20px
</style>