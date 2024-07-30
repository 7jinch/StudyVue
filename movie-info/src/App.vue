<template>
  <NavBar />
  <!-- 하위 컴포넌트에 변수를 props로 전달할 때는 바인딩 문법(:자식 컴포넌트에서 받을 속성명="부모 컴포넌트의 변수명") -->
  <Event :evnetText="evnetTexts[eventTextNum]" />
  <SearchBar :movieDatas="movieDatasCopy" @searchMovie="searchMovie($event)" />
  <p><button @click="showAllMovie()">전체보기</button></p>
  <!-- 하위 컴포넌트에서 전달받을 이벤트를 등록할 때는 @자식컴포넌트에서 전달한 이벤트명="" -->
  <Movies
    :movieDatas="movieDatasCopy"
    @openModal="
      isModal = true;
      selectedMovie = $event; // 하위 컴포넌트에서 전달한 변수를 $event로 받을 수 있음
    "
    @increaseDislike="increaseDislike($event)"
  />
  <Modal
    :movieDatas="movieDatas"
    :isModal="isModal"
    :selectedMovie="selectedMovie"
    @closeModal="isModal = false"
  />
</template>

<script>
// import { movieDatas } from './assets/movies';
import movieDatas from './assets/movies';

import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue';
import Event from './components/Event.vue';
import Movies from './components/Movies.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App', // 앱 이름
  // 상태변수
  data() {
    return {
      isModal: false,
      movieDatas, // 원본
      movieDatasCopy: [...movieDatas], // 구조분해할당으로 영화 데이터 복사하기(객체를 바로 복사하면 사본 수정시 원본도 수정됨)
      selectedMovie: 0,
      evnetTexts: [
        '10명 추첨 오사카 항공권!',
        '9월 출발! 항공권 특가 할인',
        '오늘 단 하루! 오키나와 항공권 할인',
      ],
      eventTextNum: 0,
      interval: null,
    };
  },
  // 함수
  methods: {
    increaseDislike(id) {
      // 객체 안의 변수를 가져오려면 this 키워드를 붙여야 함
      // this.movieDatas[index].dislike++;
      this.movieDatas.find((movie) => {
        if (movie.id == id) movie.dislike++;
      });
    },
    searchMovie(title) {
      // 영화 제목이 포함된 영화 데이터를 필터링
      this.movieDatasCopy = this.movieDatas.filter((movie) =>
        movie.title.includes(title)
      );
    },
    showAllMovie() {
      this.movieDatasCopy = [...this.movieDatas];
    },
  },
  // 컴포넌트
  components: {
    NavBar,
    Modal,
    Event,
    Movies,
    SearchBar,
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.eventTextNum >= this.evnetTexts.length - 1)
        this.eventTextNum = 0;
      else this.eventTextNum++;
    }, 2000);
  },
  unmounted() {
    clearInterval(interval); // unmount될 때 setInterval 종료
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
