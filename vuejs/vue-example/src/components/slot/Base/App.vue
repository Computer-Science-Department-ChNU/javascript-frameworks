<template>
  <h1>Base List App</h1>
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
import {loadUsers} from "@/api.js";

const usersList = ref([]);

loadUsers().then((users) => {
  usersList.value = users;
});

const filter = ref('');

const filteredUsers = computed(() => {
  return filter.value
      ? usersList.value.filter((u) => {
        const name = u.name?.toString().toLowerCase() || '';
        const username = u.username?.toString().toLowerCase() || '';

        return name.includes(filter.value.toLowerCase()) || username.includes(filter.value.toLowerCase());
      })
      : usersList.value;
});
</script>