<template>
<button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script lang="ts">
import {
  ref
} from "vue"
export default {
  name: "Switch",
  props: {
    checked: {
      type: Boolean,
      default: true
    },
  },
  setup(props, context) {
    const toggle = () => {
      // 当前值取反 change 事件发给父元素
      context.emit('update:checked', !props.checked)
    }

    return {
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
  transition: background 0.5s;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $insideHeight;
    height: $insideHeight;
    border-radius: $insideHeight / 2;
    background: #fff;
    transition: left 0.5s;
  }

  &.checked {
    background: blue;

    >span {
      left: calc(100% - #{$insideHeight} - 2px);
    }
  }
}
</style>
