import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    list:[]
  },
  actions:{
    initList(context,payload){
      console.log(context)
      console.log(payload)
      return new Promise((resolve)=>{
        setTimeout(()=>{
          console.log(200)
          resolve(100)
        },2000)
      })
      
    }
  }
})




