<template>
  <h1>Slots Good</h1>
  <hr>
  <List :fields="['username', 'name']" :items="usersList">
    <!--  тут ми кажемо - які пропси нам треба дістати -->
    <!--    <template #item="slotProps">-->
    <!--    {{ slotProps }}-->
    <!--    </template>-->
    <template #item="{ item }">
      <User :item="item"/>
    </template>
  </List>
  <hr>
  <List :fields="['username', 'name']" :items="usersList">
    <template #item="{ item: user }">
      {{ message }} {{ user.name }} ({{ user.username }})
    </template>
  </List>
  <hr>
  <List :fields="['title']" :items="todosList">
    <template #item="slotProps">
      <Todo :item="slotProps.item"/>
    </template>
  </List>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {loadTodos, loadUsers} from "@/api.js";

import List from "@/components/slot/SlotsGood/List.vue";
import User from "@/components/slot/SlotsGood/User.vue";
import Todo from "@/components/slot/SlotsGood/Todo.vue";

console.log(User)

const usersList = ref([]);
const todosList = ref([]);

const message = ref('Hello user: ')

loadUsers().then((users) => {
  usersList.value = users;
});

loadTodos().then((users) => {
  todosList.value = users;
});
</script>