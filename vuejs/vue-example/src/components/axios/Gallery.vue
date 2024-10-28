<template>
  <div v-if="!loading" class="content">
    <h1 class="text">Gallery</h1>
    <div class="gallery">
      <div v-for="photo in photos" :key="photo.id" class="photo">
        <img :src="photo.thumbnailUrl" :alt="photo.title"/>
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
  <Loader v-else/>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';
import {fetchPhotos} from '@/api/fetchData';
import Loader from "@/components/axios/Loader.vue";

const props = defineProps<{
  page: number;
  limit: number;
}>();

const photos = ref<any[]>([]);
const loading = ref(true);

const loadPhotos = async () => {
  loading.value = true;
  try {
    photos.value = await fetchPhotos(props.page, props.limit);
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    photos.value = [];
  } finally {
    loading.value = false;
  }
};

watch(() => [props.page, props.limit], loadPhotos, {immediate: true});
</script>

<style scoped>
.gallery {
  padding: 0 20px 20px 20px;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  align-items: start;
  justify-content: center;
  gap: 40px 20px;
}

.photo {
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 205px;
  overflow-y: auto;
}

.photo p {
  max-width: 140px;
}

.text {
  text-align: center;
}
</style>
