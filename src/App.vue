<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup() {
    // 屏幕宽度
    const screenWidth = document.documentElement.clientWidth
    const asideVisible = ref(screenWidth <= 500 ? false : true)
    provide('asideVisible', asideVisible)
  }
}
</script>
