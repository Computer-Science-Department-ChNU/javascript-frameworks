<template>
  <div>
    <p>{{ message }}</p>
    <p v-if="count">{{ count }}</p>
    <p v-if="isPublished">Іs published value: {{ isPublished }}</p>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

/* оголошення props за допомогою суто анотацій типу
або «декларація на основі типу»
довгі імена props завжди camelCase
*/
const props = defineProps<{
  message: string;
  count?: number;
  isPublished?: boolean;
}>();

/*
defineProps<{
  message: string
}>();
 */

/*
декларація під час виконання

const props = defineProps({
  message: { type: String, required: true },
  count: Number
})
 */

/* Також можемо винести типи props в окремий інтерфейс:
interface Props {
  message: string
  count?: number
}

const props = defineProps<Props>();
 */

/*
Значення за замовчуванням для props
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'привіт',
  // Для масивів або об'єктів необхідно завжди
   використовувати функцію для генерації значення за замовчуванням.
  labels: () => ['один', 'два']
})
*/

/* Attempt to assign to const or readonly variable
props.message = 'bar'

// тепер countRefValue відключено від майбутніх оновлень props.
const countRefValue = ref(props.count)

const toUpperCaseMessage = computed(() => props.message.trim().toUpperCase())
 */

/* Використання декілька типів
const props = defineProps<{
  count: number | string;
}>();
 */
</script>

<style scoped>

</style>