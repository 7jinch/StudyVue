<script setup>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';
import About from './components/About.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex/dist/vuex.cjs.js'; // store 객체를 가져올 useStore 메서드 불러오기

const store = useStore();

// 날씨 데이터 상테 변수
const weatherData = ref({
  icon: 'icon',
  temp: 0,
  text: '',
  locatin: 'location',
  city: 'seoul',
});

// 날씨 데이터 불러오는 함수
const getWeather = () => {
  const API_KEY = '81d0f117807480c7eaf5dc9edeb5105d';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=${API_KEY}`;
  fetch(API_URL)
    .then((result) => result.json()) // json 형태로 변환
    .then((data) => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    })
    .catch((error) => {
      alert(error);
    });
};

// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  // getWeather();
  store.dispatch('getWeather'); // store 객체를 통해 getWeather 함수 실행
});

const onOnSearchCity = (city) => {
  weatherData.value.city = city;
  getWeather();
};
</script>

<template>
  <!-- store에 저장된 데이터 가져올 때는 $store.state -->
  <!-- <p>{{ $store.state.count }}</p> -->
  <!-- store에 mutations을 요청할 때는 $store.commit(함수명, 전달할 값) -->
  <!-- <button @click="$store.commit('addCount', 10)">count++</button> -->
  <!-- store에 actions를 요청할 때는 $store.dispatch(함수명) -->
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <NavBar />
  <div v-if="!$store.state.toggle">
    <!-- props로 날씨 데이터 상태변수 전달 -->
    <!-- <Main :weatherData="weatherData" @onSearchCity="onOnSearchCity" /> -->
    <Main />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style lang="scss" scoped></style>
