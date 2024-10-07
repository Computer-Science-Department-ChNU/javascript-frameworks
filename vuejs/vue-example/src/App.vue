<template>
  <h1 style="text-align: center">
    <RouterLink to="/">To index page</RouterLink>
  </h1>
  <RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>
