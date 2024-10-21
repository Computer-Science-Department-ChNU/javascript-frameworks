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
      <li>
        <RouterLink to="/slot_base">Slot Base App List</RouterLink>
      </li>
      <li>
        <RouterLink to="/slot_bad">Slot Simple Bad Realization</RouterLink>
      </li>
      <li>
        <RouterLink to="/slot_dynamic_components">Slot Dynamic Components Realization</RouterLink>
      </li>
      <li>
        <RouterLink to="/slot_good">Slot Good Realization</RouterLink>
      </li>
      <li>
        <RouterLink to="/popup">Vue Popup with Slots</RouterLink>
      </li>
      <li>
        <RouterLink to="/simple_routing">Vue simple routing example</RouterLink>
      </li>
    </ul>
  </main>
</template>
