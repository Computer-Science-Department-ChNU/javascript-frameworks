<template>
  <h1 style="text-align: center">
    <RouterLink to="/">To index page</RouterLink>
  </h1>
  <RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>


<style>
hr {
  margin: 20px 0;
}

input[type="text"] {
  padding: 5px 10px;
  border-radius: 6px;
  width: 300px;
}
</style>