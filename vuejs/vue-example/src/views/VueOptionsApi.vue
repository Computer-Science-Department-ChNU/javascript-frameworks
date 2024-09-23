<template>
  <h3> My To Do List </h3>

  <!--  Let’s say we need a counter functionality that we want to reuse in our app’s components. Here is how we can create-->
  <!--  this with a mixin: ../mixins/CounterMixin.js-->

  <!--  <h3> My To Do List ({{ count }}) </h3> uncomment for mixin example-->


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
//import CounterMixin from '../mixins/CounterMixin.js'

export default {
  // mixins: [CounterMixin],
  data() {
    return {
      tasks: ["Write my posts", "Go for a walk", "Meet my friends", "Buy fruit"],
      newItemText: ""
    }
  },

  /*
    викликається, коли Vue.js створює інстанс компонента. Можна
    використовувати цей метод для виконання певних дій при створенні
    компонента, наприклад, завантаження даних з сервера.
   */
  created() {
  },

  //викликається, коли компонент Vue.js вставляється в DOM.
  mounted() {
    this.set(this.tasks.length)
  },

  /*
    використовується для відстежування змін властивостей даних та
    виконання відповідних дій, коли вони
    змінюються. Наприклад, ви можете відстежувати зміни у полі введення і
    виконувати певні дії, коли значення змінюється

    Коли - то ...
  */
  watch: {},

  computed: {
    /*
      дозволяє обчислювати дані на
      основі вхідних даних. Він буде автоматично
      оновлюватись, якщо змінюються вхідні дані. Це
      зручно використовувати, коли потрібно обчислити
      значення на основі даних, які змінюються.
     */
  },

  methods: {
    /*
      використовується для
      визначення функцій, які можуть викликатися з
      інтерфейсу. Ви можете використовувати цей метод
      для визначення функцій, які будуть виконуватися
      при натисканні кнопки або зміні значень
    */
    addNewTodo() {
      if (this.newItemText !== "") {
        this.tasks.unshift(this.newItemText)
        //this.increment()
      }
      this.newItemText = ""
    },
    removeTodo() {
      this.tasks.pop()
      //this.decrement()
    },
    removeAllTodos() {
      this.tasks = []
      //this.reset()
    }
  }
}
</script>

<style>
button {
  margin: 5px;
}

ul {
  margin: 30px 0 0 0;
  padding: 0;
  text-align: left;
}

li {
  font-size: 1.2em;
  list-style: none;
}

.list-enter-active {
  animation: add-item 1s;
}

.list-leave-active {
  position: absolute;
  animation: add-item 1s reverse;
}

.list-move {
  transition: transform 1s;
}

@keyframes add-item {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-10px) skewX(20deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>