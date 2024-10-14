<template>
  <h2>Todos list</h2>
  <input type="search" v-model="filter">
  <hr>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" :checked="todo.completed"/>
      {{ todo.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  }
})

const filter = ref('');

const filteredTodos = computed(() => {
  return filter.value
      ? props.todos.filter((u) => {
        const title = u.title?.toString().toLowerCase() || '';

        return title.includes(filter.value.toLowerCase());
      })
      : props.todos;
});
</script>