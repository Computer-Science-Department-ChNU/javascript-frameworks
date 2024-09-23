<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h1>Options Api and Composition Api</h1>
    <ul>
      <li>
        <RouterLink to="/options">Options Api</RouterLink>
      </li>
      <li>
        <RouterLink to="/composition">Composition Api</RouterLink>
      </li>
      <li>
        <RouterLink to="/computed">Computed</RouterLink>
      </li>
      <li>
        <RouterLink to="/computed_options">Computed Options</RouterLink>
      </li>
    </ul>
  </main>
</template>
