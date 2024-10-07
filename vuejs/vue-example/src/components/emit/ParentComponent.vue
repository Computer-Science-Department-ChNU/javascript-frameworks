<template>
  <!--  Батьківський компонент прослуховує
    подію counter-incremented за
    допомогою директиви v-on і викликає
    метод handleCounterIncrement із
    новим значенням властивості counter.-->
  <p>Counter value: {{ counter }}</p>
  <ChildComponent @counter-incremented="handleCounterIncrement"/>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import ChildComponent from "@/components/emit/ChildComponent.vue";

const counter = ref(0);

/*
У методі handleCounterIncrement ми
оновлюємо значення counter
лічильника в батьківському
компоненті новим значенням,
переданим із дочірнього компонента.
 */
function handleCounterIncrement(count: number) {
  counter.value = count;
}
</script>

<style lang='scss' scoped>

</style>