<script>
export default {
// Властивості, які повертає нам функція data(),
// стають реактивними та будуть доступні через `this`.
  data() {
    return {
      count: 0
    }
  },

// Методи - це функції, які змінюють стан та запускають оновлення.
// Вони можуть бути прив'язані як обробники подій у шаблонах.
  methods: {
    increment() {
      this.count++
    }
  },

// Хуки життєвого циклу викликаються на різних етапах
// життєвого циклу компонента.
// Ця функція буде викликана, коли компонент буде змонтовано.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>>