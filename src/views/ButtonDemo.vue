<template>
  <div>
    <Button>slot 插槽</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  name: 'ButtonDemo',
  components: {
    Button
  }
}
</script>