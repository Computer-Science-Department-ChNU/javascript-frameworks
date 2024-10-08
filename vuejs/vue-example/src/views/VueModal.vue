<template>
  <div class="main-block">
    <button @click="showModal">Show Modal Window</button>
    <br><br><br>
    <label for="modalTitle">Title:</label>
    <input type="text" id="modalTitle" v-model="modalTitle">
    <br><br>
    <label for="modalMessage">Message:</label>
    <input type="text" id="modalMessage" v-model="modalMessage">
    <br><br>
    <Modal v-if="isModalOpen" :modal-title="modalTitle" :modal-message="modalMessage" @close="closeModal"/>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import Modal from "@/components/modal/Modal.vue";

export default defineComponent({
  components: {Modal},
  setup() {

    const isModalOpen = ref(false);
    const modalTitle = ref('');
    const modalMessage = ref('');

    function showModal() {
      isModalOpen.value = true;
    }

    function closeModal() {
      isModalOpen.value = false;
      modalTitle.value = ''
      modalMessage.value = ''
    }

    return {
      isModalOpen,
      modalTitle,
      modalMessage,
      showModal,
      closeModal
    };
  },
});
</script>

<style lang="scss" scoped>

</style>