<template>
  <h2>Users list</h2>
  <input type="search" v-model="filter">
  <hr>
  <ul>
    <li v-for="user in filteredUsers" :key="user.id">
      {{ user.name }} {{ user.username }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  }
})

const filter = ref('');

const filteredUsers = computed(() => {
  return filter.value
      ? props.users.filter((u) => {
        const name = u.name?.toString().toLowerCase() || '';
        const username = u.username?.toString().toLowerCase() || '';

        return name.includes(filter.value.toLowerCase()) || username.includes(filter.value.toLowerCase());
      })
      : props.users;
});
</script>
