<template>
  <div>
    <div v-if="loading">
      <p>Loading product information...</p>
    </div>
    <div v-else>
      <h1>{{ product?.title }}</h1>
      <p>{{ product?.description }}</p>
      <p>Price: {{ product?.price }}$</p>
      <p>Rate: {{ product?.rating.rate }}/10</p>
      <img class="product-image" :src="product?.image" :alt="`image-${id}`">
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

interface Props {
  id: string;
}

const props = defineProps<Props>();

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const product = ref<Product | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${props.id}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.product-image {
  width: 400px;
}
</style>