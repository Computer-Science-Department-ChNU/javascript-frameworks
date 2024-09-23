<script setup>
import {ref, reactive, onMounted} from 'vue'

const profile = reactive({name: '', age: ''})
let aboveAge = ref(false)

const verifyUser = () => age.value < 18 ? aboveAge = false : aboveAge = true

const displayProfile = computed(() => {
  return `My name is ${this.name} and i am ${this.age}`;
})

onMounted(() => console.log('Application mounted'))
</script>