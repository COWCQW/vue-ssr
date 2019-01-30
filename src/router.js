import Vue from "vue"
import VueRouter from "vue-router"

import HOME from './routes/home.vue'
import SCHOOL from './routes/school.vue'
import COMPANY from './routes/company.vue'
Vue.use(VueRouter)

export default function createRouter(){
  const router = new VueRouter({
    mode:"history",
    routes: [
      {
          alias: '/',
          path: '/home',
          component: HOME
      },
      {
          path: '/school',
          component: SCHOOL
      },
      {
          path: '/company',
          component: COMPANY
      }
  ]
  })
  return router
}