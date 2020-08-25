<template>
<button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script lang="ts">
import {
  ref
} from "vue"
export default {
  name: "Switch",
  setup(props) {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }

    return {
      checked,
      toggle,
    }
  },
}
</script>

<style lang="scss" scoped>
$outerHeight: 22px;
$insideHeight: $outerHeight - 4px;

button {
  position: relative;
  width: $outerHeight * 2;
  height: $outerHeight;
  border: none;
  border-radius: $outerHeight / 2;
  background: #ccc;
  transition: background .5s;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $insideHeight;
    height: $insideHeight;
    border-radius: $insideHeight / 2;
    background: #fff;
    transition: left .5s;
  }

  &.checked {
    background: blue;

    >span {
      left: calc(100% - #{$insideHeight} - 2px);
    }
  }
}
</style>
