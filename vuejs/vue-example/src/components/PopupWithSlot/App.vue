<template>
  <button @click="openPopup">Open popup</button>
  <Popup
      :is-open="isPopupOpen"
      @ok="popupConfirmed"
      @close="isPopupOpen = false"
  >
    You really want to learn the right approaches to system design in Vue?
    <template #actions="{ confirm }">
      Confirm text
      <input :placeholder="CONFIRMATION_TEXT" v-model="confirmation"/>
      &nbsp;
      <button @click="confirm" :disabled="!isConfirmationCorrect">OK</button>
    </template>
  </Popup>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import Popup from '@/components/PopupWithSlot/Popup.vue';

const CONFIRMATION_TEXT = 'Ok';

const isPopupOpen = ref(false);
const confirmation = ref('');

const isConfirmationCorrect = computed(() => confirmation.value === CONFIRMATION_TEXT);

const openPopup = () => {
  confirmation.value = '';
  isPopupOpen.value = true;
};

const popupConfirmed = () => {
  alert('Confirmed!');
  isPopupOpen.value = false;
};
</script>
