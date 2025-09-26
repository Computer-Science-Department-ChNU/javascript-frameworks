<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="handleChangePage(currentPage - 1)">Previous</button>
    <button v-if="showFirstEllipsis" @click="handleChangePage(1)">1</button>
    <span v-if="showFirstEllipsis">...</span>
    <button
        v-for="pageNumber in visiblePageNumbers"
        :key="pageNumber"
        @click="handleChangePage(pageNumber)"
        :class="{ active: currentPage === pageNumber }"
    >
      {{ pageNumber }}
    </button>
    <span v-if="showLastEllipsis">...</span>
    <button v-if="showLastEllipsis" @click="handleChangePage(pageCount)">{{ pageCount }}</button>
    <button :disabled="currentPage === pageCount" @click="handleChangePage(currentPage + 1)">Next</button>
  </div>
</template>

<script lang="ts" setup>
import {computed, watch, toRefs} from 'vue';

const props = defineProps<{
  pageCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}>();

const {pageCount, currentPage, onChangePage} = toRefs(props);

const visiblePageNumbers = computed(() => {
  const result: number[] = [];
  let startPage = Math.max(currentPage.value - 5, 1);
  let endPage = Math.min(startPage + 9, pageCount.value);

  if (endPage - startPage < 9) {
    startPage = Math.max(endPage - 9, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    result.push(i);
  }
  return result;
});

const showFirstEllipsis = computed(() => visiblePageNumbers.value[0] > 1);
const showLastEllipsis = computed(() => visiblePageNumbers.value[visiblePageNumbers.value.length - 1] < pageCount.value);

const handleChangePage = (pageNumber: number) => {
  if (pageNumber < 1 || pageNumber > pageCount.value) {
    return;
  }
  onChangePage.value(pageNumber);
};

watch(currentPage, (newPage) => {
  if (!visiblePageNumbers.value.includes(newPage)) {
    handleChangePage(newPage);
  }
});
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
}

button {
  margin: 0 5px;
}

.active {
  font-weight: bold;
  color: red;
}
</style>
