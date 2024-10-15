<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h1>Attention!</h1>
      <hr/>
      <slot></slot>
      <hr/>
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm">
          <button @click="close">Cancel</button>
          &nbsp;
          <button @click="confirm">Ok</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, onMounted, onBeforeUnmount} from 'vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

const confirm = () => {
  emit('ok');
};

const handleKeydown = (e: KeyboardEvent) => {
  if (props.isOpen && e.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>


<style>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
