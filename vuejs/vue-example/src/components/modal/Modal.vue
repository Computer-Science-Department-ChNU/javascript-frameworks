<template>
  <div class="modal-container">
    <div class="modal-close" @click="closeModal"></div>
    <div class="modal">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <p>{{ modalMessage }}</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    modalTitle: String,
    modalMessage: String,
  },
  emits: ['close'],
  setup(props, {emit}) {

    function closeModal() {
      emit('close')
    }

    return {
      closeModal
    };
  },
});
</script>

<style>

.modal-close {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
}

</style>