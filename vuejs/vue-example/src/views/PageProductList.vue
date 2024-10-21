<template>
  <div>
    <h1>Our Awesome Products</h1>
    <div v-if="loading">
      Loading products list...
    </div>
    <ul v-else class="products-list">
      <RouterLink v-for="product in products"
                  :key="product.id"
                  :to="`/products/${product.id}`"
      >
        <li>
          {{ product.title }}
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

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

const products = ref<Product[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.products-list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;

  li {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;

    &:hover {
      border: 1px solid #fff;
      background: #acafbe;
      color: #fff;
    }
  }

  a:hover {
    text-decoration: none;
  }
}
</style>