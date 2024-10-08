<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
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
      <li>
        <RouterLink to="/props">Props</RouterLink>
      </li>
      <li>
        <RouterLink to="/emit">Emit</RouterLink>
      </li>
      <li>
        <RouterLink to="/emit-props">Emit+Props</RouterLink>
      </li>
      <li>
        <RouterLink to="/watch">Watch</RouterLink>
      </li>
      <li>
        <RouterLink to="/watch-effect">Watch Effect</RouterLink>
      </li>
      <li>
        <RouterLink to="/modal">Modal</RouterLink>
      </li>
    </ul>
  </main>
</template>
