import Vue from 'vue'
import App from './App.vue'
import createRouter from "./router"
import createEventBus from "./event"

function createApp() {
  Vue.prototype.$events = createEventBus(Vue)
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return app
}
export default async context => {

  const app = createApp()
  const url = context.url
  app.$router.push(url)
  const matchedComponents = app.$router.getMatchedComponents()

  if (!matchedComponents.length)
    return null
  else {
    await Promise.all(
      matchedComponents.filter(com=>com.fetchdata)
        .map(com=>com.fetchdata(app.$events,app.$router))  
    )
    return {
      app:app,
      state:app.$events._data
    }
  }
}



