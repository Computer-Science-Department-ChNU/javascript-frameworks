<template>
  <div>
    <h2>Кошик для покупок</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }} грн (x{{ item.quantity }})
        <button @click="removeItem(item.id)">Видалити</button>
      </li>
    </ul>
    <p>Загальна сума: {{ totalAmount }} грн</p>
    <button @click="clearCart" type="button">Очистити кошик</button>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/store/cart';
import {toRefs} from 'vue';

const cartStore = useCartStore();

const {items: cartItems, totalAmount} = toRefs(cartStore);
const removeItem = (itemId: number) => cartStore.removeItem(itemId);
const clearCart = () => cartStore.clearCart();
</script>
