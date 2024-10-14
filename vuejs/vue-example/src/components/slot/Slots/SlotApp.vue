<template>
  <List :fields="['username', 'name']" :items="usersList">
    <!--  тут ми кажемо - які пропси нам треба дістати -->
    <!--    <template #item="slotProps">-->
    <!--    {{ slotProps }}-->
    <!--    </template>-->
    <template #item="{ item }">
      <User :item="item"/>
    </template>
  </List>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadTodos, loadUsers} from "@/api.js";

import List from "@/components/slot/Slots/List.vue";
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