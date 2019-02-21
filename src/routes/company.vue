<template lang="pug">
div
  h1 COMPANY
  h2(v-for="i in list" :key="i") {{i}}
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.list = this.$events._data.list
  },
  async mounted(){
    if(!this.list.length){
      this.list = await this.$events.getList()
    }
  },
  fetchdata(event){
    return event.getList()
  }
}


</script>
<style lang="stylus" scoped>
h1
  color:#d4c
</style>