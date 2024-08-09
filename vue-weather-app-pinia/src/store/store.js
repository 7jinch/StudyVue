// pinia로 전역 데이터를 관리하는 로직을 작성
import { defineStore } from 'pinia';

// store 만들기
export const useStore = defineStore('main', {
  // 상태변수
  state: () => ({
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: '',
      locatin: 'location',
      city: 'seoul',
    },
    toggle: false,
  }),
  // pinia에서는 mutations와 actions 모두 actions에서 처리함
  actions: {
    updateWeather(payload) {
      this.weatherData.icon = payload.weather[0].icon;
      this.weatherData.temp = payload.main.temp;
      this.weatherData.text = payload.weather[0].description;
      this.weatherData.location = payload.sys.country;
      this.weatherData.city = payload.name;
    },
    onSearchCity(payload) {
      this.weatherData.city = payload;
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },

    // 비동기 함수: async
    // 날씨 데이터 불러오는 함수
    async getWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY; // 환경 변수로 가져오기
      // context: 전역 객체
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;
      await fetch(API_URL)
        .then((result) => result.json()) // json 형태로 변환
        .then((data) => {
          // mutation 함수로 날씨 데이터 업데이트
          // context.commit('updateWeather', data);
          this.updateWeather(data);
        })
        .catch((error) => {
          // console.log(error);
          // alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        });
    },
  },
});
