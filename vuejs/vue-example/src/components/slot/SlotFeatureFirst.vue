<template>
  <UserList :users="usersList"/>
  <!--  Замовник: Хочу теж список, але інший список...-->
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadUsers, loadTodos} from "@/api.js";
import UserList from "@/components/slot/UserList.vue";

const usersList = ref([]);
const todosList = ref([]);

loadUsers().then((users) => {
  usersList.value = users;
});

loadTodos().then((users) => {
  todosList.value = users;
});
</script>