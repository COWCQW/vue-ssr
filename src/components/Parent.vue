<template lang="pug">
  div#parent
    div(v-for="i in rootVal") {{i}}
</template>
<script>

export default {
  inject:[
    "rootVal"
  ],
  components:{   
  }
}
</script>
<style lang="stylus" scoped>

</style>
