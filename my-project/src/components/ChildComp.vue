<template>
  <div>
    <h2>Child Component</h2>
    <p :style="{ color: color, backgroundColor: bgColor }">{{ color }}</p>
  </div>
</template>

<script setup>
// defineProps 메서드로 상위 컴포넌트가 전달해 준 props를 받기
const props = defineProps({
  color: String,
  bgColor: String,
});
</script>

<style scoped></style>
