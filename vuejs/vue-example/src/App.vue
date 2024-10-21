<template>
  <ShopHeader/>
  <ShopLayout>
    <RouterView/>
  </ShopLayout>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import ShopHeader from '@/components/Shop/ShopHeader.vue'
import ShopLayout from '@/components/Shop/ShopLayout.vue'
</script>