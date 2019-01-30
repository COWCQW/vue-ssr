<template lang="pug">
  div#app
    h1 WELCOME TO VUESSR
    nav
      router-link(to="/home") !!!!home!!!!
      router-link(to="/school") !!!!school!!!!
      router-link(to="/company") !!!!company!!!!
    router-view
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="stylus" scoped>
#app
  text-align center
  background #ccc
  nav
    display flex
    justify-content space-between
    a
      display block
      text-align center
      font-size 30px
      width 30%
</style>

