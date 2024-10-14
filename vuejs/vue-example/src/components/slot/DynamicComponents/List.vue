<template>
  <input type="search" v-model="filter">
  <hr>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">
      <!--      <User :item="item"/>-->
      <component :is="itemComponent" :item="item"/>
    </li>
  </ul>
  <h3>
    <a href="https://ua.vuejs.org/guide/essentials/component-basics.html#dynamic-components" target="_blank">Динамічні
      компоненти</a>
  </h3>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import User from "@/components/slot/User.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  fields: {
    type: Array,
    required: true,
  },
  itemComponent: {
    type: Object,
    required: true,
  }
})

const filter = ref('');

const filteredItems = computed(() => {
  /*
  1 - Перевірка filter.value - якщо значення у змінній filter (яке є рядком) не порожнє, починається процес фільтрації масиву props.items. Якщо значення фільтру порожнє, повертаються всі елементи props.items без фільтрації.
 */
  return filter.value
      /*
        2 - filter() - функція фільтрує елементи масиву props.items (об'єкти), використовуючи функцію зворотного виклику. Для кожного елемента u (об'єкта), функція зворотного виклику має повертати true або false, що вирішує, чи залишати цей елемент у результаті.
       */
      ? props.items.filter((u) => {
        /*
          3 - some() - функція перевіряє, чи принаймні один елемент масиву props.fields відповідає умові. Для кожного поля f функція перевіряє, чи значення u[f] (поле об'єкта u) містить підрядок з filter.value (після приведення до нижнього регістру). Якщо знайдено хоча б одне поле, яке відповідає умові, some() повертає true, і елемент u залишається у відфільтрованому масиві
         */
        return props.fields.some((f) => {
          /*
            4 - includes() - функція перевіряє, чи входить підрядок filter.value в значення поля u[f] (після приведення до нижнього регістру).
           */
          return u[f].toLowerCase().includes(filter.value.toLowerCase());
        });
      })
      : props.items;
});

</script>
