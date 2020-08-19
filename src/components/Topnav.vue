<template>
  <div class="topnav">
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>菜单-2</li>
      <li>菜单-1</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Topnav",
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  position: relative;
  z-index: 10;
  padding: 16px;
  background: pink;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
