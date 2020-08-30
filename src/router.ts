import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import List from './views/List.vue'
import SwitchDemo from "./views/SwitchDemo.vue"
import ButtonDemo from "./views/ButtonDemo.vue"

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
          component: SwitchDemo,
        },
        {
          path: "button",
          component: ButtonDemo,
        },
      ],
    },
  ],
})

export default router
