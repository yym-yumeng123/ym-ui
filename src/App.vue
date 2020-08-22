<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue"
import router from "./router"
export default {
  name: "App",
  setup() {
    // 屏幕宽度
    const screenWidth = document.documentElement.clientWidth
    const asideVisible = ref(screenWidth <= 500 ? false : true)
    provide("asideVisible", asideVisible)

    router.afterEach(() => {
      asideVisible.value = screenWidth <= 500 ? false : true
    })
  },
}
</script>
