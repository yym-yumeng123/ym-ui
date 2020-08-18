import { createApp } from "vue"
import App from "./App.vue"
import Test from './components/test.vue'
import "./index.css"

// hash 模式
import { createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Test
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount("#app")
