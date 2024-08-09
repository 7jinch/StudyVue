<template>
  <!-- <h2>{{ props.title }}</h2> -->
  <h2>{{ model }}</h2>
  <!-- 기존에 상위 컴포넌트로 전달하던 방법 -->
  <!-- <input
    type="text"
    @input="
      inputText = $event.target.value; // 입력된 값 가져오기
      emits('onInput', inputText); // 상위 컴포넌트로 이밴트명과 상태변수 전달
    "
  /> -->
  <!-- v-model과 defineModel로 더 간단해 짐 -->
  <input type="text" v-model="model" />
  <!-- <p>input text: {{ inputText }}</p> -->
  <p>input text: {{ model }}</p>
</template>

<script setup>
// import { ref } from 'vue';

// const props = defineProps({
//   title: String,
// });

// const inputText = ref('hello');

// const emits = defineEmits(['onInput']);
const model = defineModel(); // defineModel로 상위 컴포넌트에서 보낸 상태변수를 전달받을 수 있음
</script>

<style lang="scss" scoped></style>
