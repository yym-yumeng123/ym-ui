<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>UI组件库</h1>
      <h2>Vue3 UI 组件库</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
export default {
  name: 'Home',
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>

</style>
