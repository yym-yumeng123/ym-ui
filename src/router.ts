import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import List from './views/List.vue'
import Switch from "./views/Switch.vue"
import Button from "./views/Button.vue"

// hash 模式
import { createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: '',
          component: List
        },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
      ],
    },
  ],
})

export default router
