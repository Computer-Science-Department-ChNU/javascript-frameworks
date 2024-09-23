<template>
  <h3> My To Do List </h3>
  <div>
    <input v-model="newItemText" @keyup.enter="addNewTodo"/>
    <button @click="addNewTodo">Add</button>
    <button @click="removeTodo">Remove</button>
    <button @click="removeAllTodos">Remove All</button>
    <transition-group name="list" tag="ul">
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </transition-group>
  </div>
</template>

<script>
import {ref} from 'vue'
// import useCounter from './composables/useCounter.js'

export default {
  setup() {
    const tasks = ref(["Write my posts", "Go for a walk", "Meet my friends", "Buy fruit"])
    const newItemText = ref("")

    // extract variables and functions by using destructuring assignment syntax from composable useCounter.
    // const {count, increment, decrement, set, reset} = useCounter()
    //  onMounted(() => set(tasks.value.length))

    function addNewTodo() {
      if (newItemText.value !== "") {
        tasks.value.unshift(newItemText.value)
      }
      newItemText.value = ""
      // increment()
    }

    function removeTodo() {
      tasks.value.pop()
      // decrement()
    }

    function removeAllTodos() {
      tasks.value = []
      //  reset()
    }

    return {
      tasks,
      newItemText,
      addNewTodo,
      removeTodo,
      removeAllTodos
    }
  }
}
</script>