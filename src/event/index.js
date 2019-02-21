import axios from "axios"

export default (Vue) =>{
  const eventBus = new Vue({
    data() {
      return {
        list: []
      }
    },
    methods: {
      getList() {
        return axios.get("http://localhost:7777/api/list").then((res) => {
          this.list = res.data
          return res.data
        })
      }
    }
  })
  return eventBus
}



