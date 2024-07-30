<template>
  <h1>영화 정보</h1>
  <div v-for="movieData in movieDatas" :key="movieData.id" class="item">
    <figure>
      <img :src="`${movieData.imgUrl}`" :alt="movieData.title" />
    </figure>
    <div class="info">
      <h3 class="bg-yellow" :style="`${movieData.textRed}`">
        제목: {{ movieData.title }}
      </h3>
      <p>개봉: {{ movieData.year }}</p>
      <p>장르: {{ movieData.category }}</p>
      <div>
        <button v-on:click="movieData.like++">좋아요</button>
        <span>{{ movieData.like }}</span>
      </div>
      <div>
        <!-- <button @:click="increaseDislike(movieData.id)">싫어요</button> -->
        <!-- 상위 컴포넌트로 이벤트를 전달할 때는 $emit('상위 컴포넌트에서 받을 이벤트명', 상위 컴포넌트로 전달할 변수) -->
        <button @:click="$emit('increaseDislike', movieData.id)">싫어요</button>
        <span>{{ movieData.dislike }}</span>
      </div>
      <p>
        <button @click="$emit('openModal', movieData.id)">상세보기</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesComponents',
  props: {
    movieDatas: Array,
  },
};
</script>

<style></style>
