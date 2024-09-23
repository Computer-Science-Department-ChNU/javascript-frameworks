<template>
  <div>
    <p>Original Price: {{ originalPrice }}</p>
    <input type="number" v-model="discount">
    <p>Discount: {{ discount }}</p>
    <p>Final Price: {{ finalPrice }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';

const originalPrice = ref(100);
const discount = ref(null);

const finalPrice = computed(() => {
  return originalPrice.value - discount.value;
});
</script>
