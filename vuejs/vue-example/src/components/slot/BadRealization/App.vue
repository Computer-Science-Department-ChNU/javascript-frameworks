<template>
  <h1>Bad Realization</h1>
  <hr>
  <UserList :users="usersList"/>
  <br>
  <TodosList :todos="todosList"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadUsers, loadTodos} from "@/api.js";
import UserList from "@/components/slot/BadRealization/UserList.vue";
import TodosList from "@/components/slot/BadRealization/TodosList.vue";

const usersList = ref([]);
const todosList = ref([]);

loadUsers().then((users) => {
  usersList.value = users;
});

loadTodos().then((users) => {
  todosList.value = users;
});
</script>