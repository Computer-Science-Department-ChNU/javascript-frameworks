<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>Ціна: {{ product.price }} грн</p>
    <button @click="addToCart">Додати до кошика</button>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/store/cart';
import {defineProps} from 'vue';

const props = defineProps<{
  product: { id: number; name: string; price: number };
}>();

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addItem({...props.product, quantity: 1});
};
</script>
