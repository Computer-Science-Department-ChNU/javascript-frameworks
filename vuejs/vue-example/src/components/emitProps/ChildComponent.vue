<template>
  <div>
    <input type="text" v-model="newItemText">
    <button type="button" @click="addItem">Add item</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const newItemText = ref('')

//const emit = defineEmits(['itemAdded']);

const emit = defineEmits<{
  (e: 'itemAdded', value: string): void
}>()

function addItem() {
  if (newItemText.value.length > 0) {
    emit('itemAdded', newItemText.value);
    newItemText.value = '';
  } else {
    // validation logic
    alert('Заповніть поля!');
  }
}
</script>

<style scoped>

</style>