<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>UI组件库</h1>
      <h2>Vue3 UI 组件库</h2>
      <p class="actions">
        <a href="https://github.com/yym-yumeng123/ym-ui">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue"
export default {
  name: "Home",
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;

      margin: 0 8px;
      padding: 0 8px;
      background: #fff;
    }
  }
}
</style>
