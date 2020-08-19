<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue"
export default {
  name: "Doc",
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
.content {
  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;
    padding: 16px;
    padding-top: 70px;
    background: lightseagreen;

    > h2 {
      margin-bottom: 4px;

    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
}
</style>
