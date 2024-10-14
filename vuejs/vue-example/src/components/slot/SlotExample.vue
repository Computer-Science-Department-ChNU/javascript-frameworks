<template>
  <!--  <UserList :users="usersList"/>-->
  <!--  Замовник: Хочу теж список, але інший список...-->
  <List :fields="['username', 'name']" :items="usersList" :itemComponent="User"/>
  <List :fields="['title']" :items="todosList" :itemComponent="Todo"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadTodos, loadUsers} from "@/api.js";

import List from "@/components/slot/List.vue";
import User from "@/components/slot/User.vue";
import Todo from "@/components/slot/Todo.vue";

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