<template>
  <form @submit.prevent="handleSubmit">
    <p>Create Product</p>
    <div class="inputs-container">
      <div class="title-block">
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="title"/>
      </div>
      <div class="price-block">
        <label for="price">Price:</label>
        <input id="price" type="number" v-model="price"/>
      </div>
    </div>
    <button type="submit">Add Product</button>
  </form>
</template>

<script setup lang="ts">
import {ref, defineEmits} from "vue";

const title = ref<string>('');
const price = ref<number | string>('');

const emit = defineEmits<{
  (e: 'product-added', product: { title: string; price: number; id: string }): void;
}>();

const handleSubmit = () => {
  emit('product-added', {title: title.value, price: Number(price.value), id: '@'});
  title.value = '';
  price.value = '';
};
</script>

<style lang="scss" scoped>
form {
  padding: 20px;
  border: 1px solid #000;
  border-radius: 15px;
}

.inputs-container {
  display: grid;
  gap: 10px;
  padding-bottom: 20px;
}

.title-block, .price-block {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: end;
  gap: 30px;
}
</style>