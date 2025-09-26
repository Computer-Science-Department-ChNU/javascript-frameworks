<template>
  <div class="cart-app">
    <ProductListComponent/>
    <CartComponent/>
  </div>
</template>

<script setup lang="ts">
import ProductListComponent from '@/components/piniaCart/ProductList.vue';
import CartComponent from '@/components/piniaCart/Cart.vue';
</script>

<style lang="scss">
.cart-app {
  display: flex;

  > div {
    flex: 1;
  }
}
</style>