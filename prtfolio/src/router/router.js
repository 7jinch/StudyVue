import { createWebHistory, createRouter } from 'vue-router';

import TitlePage from '../components/Title.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';
import Detail from '../components/Detail.vue';

// router 객체 생성
const router = createRouter({
  history: createWebHistory(), // 함수를 가져옴
  routes: [
    // path와 컴포넌트(페이지) 지정하기
    { path: '/', component: TitlePage },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/portfolio', component: Portfolio },
    { path: '/detail/:id', component: Detail },
  ],
});

export default router;
