<template lang='jade'>
  .footer
    mt-tabbar(class='footBox' fixed)
      router-link(to='/play/' class='musicWrapper')
        mt-tab-item(class='musicBox')

</template>
<style lang="stylus" scoped>
  .footer
    // position fix
  .footBox
    background #fff
    box-shadow 0 0px 46px 0px rgba(0,0,0,.12)
    .musicWrapper
      height 100%
      width 100%
      &:visited,&:hover,&:active
        background #000
    .musicBox
      height 70px
      background #fff

</style>