import {ref, readonly} from 'vue'

//Composables are created by using the same principles as in the setup() function.

export default function useCounter() {
    const count = ref(0)
    const increment = () => {
        count.value += 1
    }
    const decrement = () => {
        count.value -= 1
    }
    const set = (val) => {
        count.value = val
    }
    const reset = () => {
        count.value = 0
    }

    return {
        count: readonly(count),
        increment,
        decrement,
        set,
        reset
    }
}