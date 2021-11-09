import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Layout from "../views/Layout.vue"
import Title from "../views/Title.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/title",
    name: "title",
    component: Title,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
