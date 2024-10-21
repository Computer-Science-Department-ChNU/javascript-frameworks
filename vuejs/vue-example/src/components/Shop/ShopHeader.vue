<template>
  <header class="shop-header">
    <RouterLink to="/">
      My Awesome Vue Shop
    </RouterLink>
    <nav class="shop-nav">
      <ul>
        <li v-for="page in pages" :key="page.path">
          <RouterLink :to="page.path">{{ page.title }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const pages = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Products",
    path: "/products"
  },
  {
    title: "Contact",
    path: "/contact"
  }
]
</script>

<style lang="scss">
.shop {

  &-header {
    display: flex;
    padding: 20px;
    border: 1px solid gray;

    a {
      padding: 3px 10px;
    }
  }

  &-nav {
    margin-left: auto;

    ul {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 20px;
      justify-items: center;
      justify-content: start;
      align-content: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
}
</style>