<template>
  <div>
    <!--    Дочірній компонент має кнопку, яка при
    натисканні збільшує значення лічильника на 1. -->
    <button @click="incrementCounter">Increment</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
/* Оголошення реактивної змінної counter */
const counter = ref(0);

/* Оголошення переданих подій */
const emit = defineEmits(['counterIncremented']);

/*
const emit = defineEmits<{
  (e: 'counterIncremented', id: number): void
}>()
 */

function incrementCounter() {
  /*
    Коли лічильник збільшується, дочірній
    компонент видає подію під назвою
    counterIncremented за допомогою методу emit та аргументом counter.value.
   */
  counter.value++;
  emit('counterIncremented', counter.value);
}
</script>

<style scoped>

</style>