<template>
  <div class="search-box">
    <!-- @input 이벤트: 입력 필드의 값을 수정할 때마다 발생 -->
    <!-- <input
      type="search"
      @input="inputText = $event.target.value"
      placeholder="검색하기"
    /> -->
    <!-- <input type="search" v-model="inputText" placeholder="검색하기" /> -->
    <!-- @change 이벤트: 입력 필드의 값이 변경된 후, 포커스가 입력 필드 밖으로 이동하거나 사용자가 엔터 키를 눌렀을 때 발생 -->
    <input
      type="search"
      @change="
        // @change 이벤트 발생시
        inputText = $event.target.value; // inputText에 값 대입
        $event.target.value = ''; // 검색바 지우기
        $emit('searchMovie', inputText);
      "
      placeholder="검색하기"
    />
    <button>검색</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBarComponent',
  data() {
    return {
      inputText: '',
    };
  },
  props: {
    movieDatas: Array,
  },
  // 특정 상태변수가 변경되는지 감지하는 hook
  watch: {
    // 함수명은 감시할 변수명과 동일하게 만들기
    // 매개변수로는 변수의 변경된 값이 들어옴(추가로 이전값도 받을 수 있음)
    inputText(name) {
      // 입력한 값이 영화 제목에 포함되면 그걸 반환함
      // 객체 안의 변수를 가져오려면 this 키워드를 붙여야 함
      const findMovie = this.movieDatas.filter((movie) =>
        movie.title.includes(name)
      );

      if (findMovie.length == 0) {
        alert('해당하는 영화가 없습니다.');
      }
    },
  },
};
</script>

<style>
.search-box {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 5px 10px;
}

.search-box button {
  margin: 0;
}
</style>
