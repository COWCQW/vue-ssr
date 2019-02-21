import Vue from 'vue'
import App from './App.vue'
import createEventBus from "./event"
import createRouter from "./router"
import store from "./store"


Vue.prototype.$events = createEventBus(Vue)
const router = createRouter()
const app = new Vue({
  router,
  store,
  render:h=>h(App)
})
app.$events._data = window.__INIT_STATE__

app.$mount("#app")

