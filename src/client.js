import Vue from 'vue'
import App from './App.vue'
import createRouter from "./router"

const router = createRouter()
const app = new Vue({
  router,
  render:h=>h(App)
})

window.onload = () => {
  app.$mount("#app")
}