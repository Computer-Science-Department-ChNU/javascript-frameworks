<template>
  <!--  під час передачі реквізитів дочірньому компоненту використовуємо kebab-case нотацію для узгодження з атрибутами HTML.
  PascalCase для тегів компонентів.
  Передавача props як динамічне значення
  -->
  <ChildComponent :message="parentMessage"/>

  <!--  Передавача props як статичне значення -->
  <ChildComponent message="Some static message"/>

  <ChildComponent message="Some static message" :count="34"/>

  <!--  <ChildComponent message="Some static message" :is-published="true"/>-->
</template>

<script lang='ts' setup>
import ChildComponent from "@/components/props/ChildComponent.vue";

const parentMessage = 'Hello from parent message'
</script>

<style lang='scss' scoped>

</style>