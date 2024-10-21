<template>

  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions, comments, or concerns, please feel free to reach out to us!</p>
    <div v-if="loading">
      <p>Loading contact information...</p>
    </div>
    <div v-else>
      <p><strong>Email:</strong> {{ contactInfo?.email }} </p>
      <p><strong>Phone:</strong> {{ contactInfo?.phone }}</p>
      <p><strong>City:</strong> {{ contactInfo?.address?.city }}</p>
      <p><strong>Street:</strong> {{ contactInfo?.address?.street }}, {{ contactInfo?.address?.suite }}</p>
      <p><strong>Zip:</strong> {{ contactInfo?.address?.zipcode }}</p>
    </div>
  </div>

</template>

<script>

import {defineComponent, ref, onMounted} from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'Contact',
  setup() {

    const loading = ref(true)
    const contactInfo = ref({})

    onMounted(async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        contactInfo.value = response.data
        loading.value = false
      } catch (error) {
        console.error(error)
        loading.value = false
      }
    })

    return {
      contactInfo,
      loading
    }
  }
});
</script>

<style scoped>


</style>