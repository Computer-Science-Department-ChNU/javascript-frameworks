<template>
  <h1>DynamicComponents</h1>
  <List :fields="['username', 'name']" :items="usersList" :itemComponent="User"/>
  <List :fields="['title']" :items="todosList" :itemComponent="Todo"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadTodos, loadUsers} from "@/api.js";

import List from "@/components/slot/DynamicComponents/List.vue";
import User from "@/components/slot/DynamicComponents/User.vue";
import Todo from "@/components/slot/DynamicComponents/Todo.vue";

console.log(User)

const usersList = ref([]);
const todosList = ref([]);

loadUsers().then((users) => {
  usersList.value = users;
});

loadTodos().then((users) => {
  todosList.value = users;
});
</script>