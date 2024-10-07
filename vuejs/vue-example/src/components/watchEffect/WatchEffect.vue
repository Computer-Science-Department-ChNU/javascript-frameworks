<template>
  <div>
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue';

const firstName = ref('');
const lastName = ref('');
const fullName = ref('');

// watchEffect автоматично відстежує обидві змінні
watchEffect(() => {
  fullName.value = `${firstName.value} ${lastName.value}`.trim();
});
</script>

<style lang='scss' scoped>

</style>