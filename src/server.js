import Vue from 'vue'
import App from './App.vue'
import createRouter from "./router"

function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return app
}
export default context => {

  return new Promise((resolve) => {
    const app = createApp()
    const url = context.url
    app.$router.push(url)
    // 获取相应路由下的组件
    const matchedComponents = app.$router.getMatchedComponents()

    // 如果没有组件，说明该路由不存在，报错404
    if (!matchedComponents.length)
      resolve(null)
    else
      resolve(app)
  })
}