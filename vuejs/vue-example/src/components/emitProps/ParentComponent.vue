<template>
  <div>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <p v-else>List is empty, add any item to show list!</p>
    <ChildComponent @item-added="handleAddItem"/>
  </div>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import ChildComponent from "@/components/emitProps/ChildComponent.vue";

const items = ref([]);

function handleAddItem(item: string) {
  items.value.push(item);
}
</script>

<style lang='scss' scoped>

</style>