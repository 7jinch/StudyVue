// vuex로 전역 데이터를 관리하는 로직을 작성
import { createStore } from 'vuex';

// stroe 만들기
export default createStore({
  state: {
    // 초기 데이터
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: '',
      locatin: 'location',
      city: 'seoul',
    },
    toggle: false,
  },
  mutations: {
    // 데이터 변경(state(현재의 상태 객체), payload(전달받은 데이터))
    updateWeather(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
    toggleButton(state) {
      state.toggle = !state.toggle;
    },
  },
  actions: {
    // 비동기 작업할 때는 actions
    // 날씨 데이터 불러오는 함수
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY; // 환경 변수로 가져오기
      // context: 전역 객체
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL)
        .then((result) => result.json()) // json 형태로 변환
        .then((data) => {
          // mutation 함수로 날씨 데이터 업데이트
          context.commit('updateWeather', data);
        })
        .catch((error) => {
          console.log(error);
          // alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        });
    },
  },
});
