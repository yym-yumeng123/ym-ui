<template>
  <div class="topnav">
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>菜单-2</li>
      <li>菜单-1</li>
    </ul>
    <div class="toggleAside" @click="toggleMenu"></div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue"
export default {
  name: "Topnav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible")
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }

    return { toggleMenu }
  },
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

  > .toggleAside {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border: 1px solid red;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
</style>
