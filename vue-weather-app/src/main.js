import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/store'; // vuex로 만든 store 가져오기

// imoprt the font awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 사용할 아이콘 불러오기
import {
  faBarsStaggered,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

// 아이콘 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // font awesome 라이프러리 등록하기
  .use(store) // store 등록하기
  .mount('#app');
