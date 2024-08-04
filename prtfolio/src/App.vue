<script setup>
import NavBar from './components/NavBar.vue';

import data from './assets/portfolio'; // 포트폴리오 데이터 가져오기
</script>

<template>
  <NavBar />
  <!-- router로 지정한 컴포넌트를 렌더링함 -->
  <!-- 하위 컴포넌트로 props 전달도 가능함-->
  <router-view :data="data" />
</template>

<style scoped lang="scss"></style>
