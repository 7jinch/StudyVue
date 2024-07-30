<template>
  <div v-if="isModal" class="modal">
    <div class="inner">
      <h3>{{ movieDatas[selectedMovie].title }}</h3>
      <p>상세정보</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    movieDatas: Array,
    isModal: Boolean,
    selectedMovie: Number,
  },
};
</script>

<style></style>
