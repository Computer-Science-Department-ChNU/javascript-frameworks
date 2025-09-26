<template>
  <div>
    <div v-if="!productStore.loading" class="content">
      <div class="panel">
        <ProductForm @product-added="addProduct"/>
        <button @click="sortProducts">Sort by price</button>
      </div>
      <ul class="product-list">
        <li v-for="product in productStore.products" :key="product.id">
          {{ product.title }} - {{ product.price }}
          <div class="number">{{ product.id }}</div>
          <button @click="removeProduct(product.id)">Remove</button>
        </li>
      </ul>
    </div>
    <Loader v-else/>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import Loader from "@/components/pinia/Loader.vue";
import {useProductStore} from "@/store/products.ts";
import ProductForm from "@/components/pinia/ProductForm.vue";
import type {Product} from "@/types/product";

const productStore = useProductStore();

const fetchProducts = () => {
  productStore.fetchProducts();
};

const addProduct = (product: Product) => {
  productStore.addProduct(product);
};

const removeProduct = (productId: number) => {
  productStore.removeProduct(productId);
};

const sortProducts = () => {
  productStore.sortProducts();
};

onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss" scoped>
.panel {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  li {
    position: relative;
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    text-align: center;
    height: 100px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 15px;
    background: #c6dcc3;
  }
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
}
</style>