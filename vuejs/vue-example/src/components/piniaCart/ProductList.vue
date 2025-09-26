<template>
  <div>
    <h2>Список продуктів</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <ProductComponent :product="product"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProductComponent from '@/components/piniaCart/Product.vue';
import {ref} from 'vue';

const products = ref([
  {id: 1, name: 'Товар 1', price: 100},
  {id: 2, name: 'Товар 2', price: 150},
  {id: 3, name: 'Товар 3', price: 200},
  {id: 4, name: 'Товар 4', price: 250},
]);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
