<template lang="pug">
  section#parent

</template>
<script>
import Children from "./Children"
export default {
  name: "parent",
  components:{
    Children
  },
  data:{
    parentDate:[1,2,3]
  }
  
}
</script>
<style lang="stylus" scoped>

</style>