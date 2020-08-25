<template>
<button><span></span></button>
</template>

<script lang="ts">
export default {
  name: "Switch",
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
  background: blue;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $insideHeight;
    height: $insideHeight;
    border-radius: $insideHeight / 2;
    background: #fff;
  }

  &:hover {
    >span {
      left: calc(100% - #{$insideHeight} - 2px);
    }
  }
}
</style>
