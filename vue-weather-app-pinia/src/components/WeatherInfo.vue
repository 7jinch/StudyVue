<script setup>
// 상위 컴포넌트에서 전달한 상태변수 받기
// const props = defineProps({
//   weatherData: Object,
// });
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

// store 가져와서 래핑하기
const store = useStore();
const { weatherData } = storeToRefs(store);
</script>

<template>
  <div class="weather-info">
    <div class="icon">
      <!-- 바인딩 문법으로 이미지 url 넣기 -->
      <img
        :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`"
        :alt="weatherData.text"
      />
    </div>
    <div class="temp">{{ (weatherData.temp - 273.15).toFixed(1) }}&deg</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">
      <font-awesome-icon :icon="['fas', 'location-dot']" />
      {{ weatherData.city }},
      {{ weatherData.location }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-info {
  padding: 20px;
  & > div {
    margin-bottom: 20px;
    padding: 20px;
  }
  .icon img {
    width: 140px;
  }
  .temp {
    font-size: 4em;
  }
  .text {
    font-size: 2em;
  }
}
</style>
