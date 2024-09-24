import {ref, readonly} from 'vue'

//Composable are created by using the same principles as in the setup() function.

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
        // Змінну count можна змінити лише викликом
        // методів increment, decrement, set або reset.
        // Будь-які спроби змінити його безпосередньо не вийде,
        // гарантуючи, що composable інкапсулює та контролює стан.
        count: readonly(count),
        increment,
        decrement,
        set,
        reset
    }
}