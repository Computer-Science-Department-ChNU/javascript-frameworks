<template>
  <div>
    <p>{{ message }}</p>
    <input type="text" v-model="updatedMessage" placeholder="Type something...">
  </div>
</template>

<script lang='ts' setup>
import {ref, watch} from "vue";

const message = ref('I am initial message');
const updatedMessage = ref('');

/*
Першим аргументом watch можуть бути різні типи реактивних "джерел":
 це може бути референція (включаючи обчислювані референції),
 реактивний об’єкт, функція отримання або масив із кількох джерел

 updatedMessage — це ref, і ми передаємо його напряму в watch.
 */
watch(updatedMessage, (newValue, oldValue) => {
  message.value = `You typed: ${newValue}`;
})

/*
В даному випадку ми передаємо у перший аргумент функцію,
яка повинна повертала не сам ref, а не його значення для відслідковування.

watch(
    () => updatedMessage.value,
    (newValue) => {
      message.value = `You typed: ${newValue}`;
    }
)
 */
</script>

<style lang='scss' scoped>

</style>