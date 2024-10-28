<template>
  <div v-if="!loading">
    <Gallery :page="currentPage" :limit="perPage"/>
    <Pagination :page-count="pageCount" :current-page="currentPage" :on-change-page="handleChangePage"/>
  </div>
  <Loader v-else/>
</template>

<script lang="ts" setup>
import {ref, computed, onMounted} from 'vue';
import Gallery from '@/components/axios/Gallery.vue';
import Pagination from '@/components/axios/Pagination.vue';
import {fetchAllPhotos} from '@/api/fetchData';
import Loader from '@/components/axios/Loader.vue';

const currentPage = ref<number>(1);
const perPage = ref<number>(15);
const photosCount = ref<number>(0);
const loading = ref<boolean>(true);

const handleChangePage = (page: number) => {
  currentPage.value = page;
};

const pageCount = computed(() => {
  return Math.ceil(photosCount.value / perPage.value);
});

onMounted(async () => {
  try {
    const data = await fetchAllPhotos();
    photosCount.value = data.length;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
* {
  font-family: 'Lexend', sans-serif;
}
</style>
