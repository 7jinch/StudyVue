<template>
  <div class="container">
    <!-- @하위 컴포넌트에서 전달받은 이벤트명 = "실행할 함수" -->
    <!-- <SearchBar @onSearchCity="onSearchCity" /> -->
    <SearchBar />

    <!-- 다시 props로 날씨 데이터 상태변수 전달 -->
    <!-- <WeatherInfo :weatherData="props.weatherData" /> -->
    <WeatherInfo />
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
import WeatherInfo from './WeatherInfo.vue';

// 이벤트명을 배열로 전달하고 emit 정의하기
// const emit = defineEmits(['onSearchCity']);

// 상위 컴포넌트에서 전달한 상태변수 받기
// const props = defineProps({
//   weatherData: Object,
// });

// onSearchCity 함수 정의
// 함께 전달된 상태변수(inputText)를 매개변수로 받을 수 있음
// const onSearchCity = (city) => emit('onSearchCity', city); // onSearchCity 실행시 상위 컴포넌트로 전달
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
