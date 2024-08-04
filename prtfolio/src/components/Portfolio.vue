<template>
  <section id="portfolio" class="container">
    <h1>portfolio</h1>
    <ul class="list row">
      <li v-for="data in props.data" class="col-md-4">
        <img :src="data.imgUrl" alt="1" />
        <h3>{{ data.title }}</h3>
        <p>{{ data.desc }}</p>
        <small class="mb-3 text-secondary">{{ data.skills }}</small>
        <router-link class="btn btn-primary" :to="'/detail/' + data.id"
          >상세보기</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script setup>
// 상위 컴포넌트(App.vue)로부터 props 전달받기
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
#portfolio {
  h1 {
    margin-bottom: 1rem;
  }
  .list {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10vh;
      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
      }
      h4 {
        margin-top: 1rem;
      }
    }
  }
}
</style>
