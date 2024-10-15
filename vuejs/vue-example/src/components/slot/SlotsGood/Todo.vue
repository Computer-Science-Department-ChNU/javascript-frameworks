<template>
  <input type="checkbox" :checked="item.completed"/>
  {{ item.title }}
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped lang="scss">

</style>