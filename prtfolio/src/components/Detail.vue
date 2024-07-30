<template>
  <section id="detail" class="container">
    <!-- 파라미터 값을 전달받을 때는 받는 쪽에서 route.param.변수명 -->
    <h1>{{ data[$route.params.id].title }}</h1>
    <article class="pb-5">
      <img
        :src="`${data[$route.params.id].imgUrl}`"
        :alt="`${data[$route.params.id].title}`"
      />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="text-secondary">{{ data[$route.params.id].skills }}</small>
      <p>
        <a
          :href="`${data[$route.params.id].link}`"
          class="btn btn-primary mt-4"
          target="_blank"
          >홈페이지
        </a>
      </p>
      <!-- 이동할 때는 $router.push('이동할 경로') ex)$router.push('/portfolio') -->
      <!-- 이전 페이지로 뒤로가기를 할 때는 $router.back() -->
      <button @click="$router.back()" class="btn btn-secondary">
        돌아가기
      </button>
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
#detail h1 {
  display: flex;
  gap: 1rem;
  align-items: center;
  .badge {
    font-size: small;
  }
}

article {
  img {
    width: 100%;
    aspect-ratio: 8/3;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1em;
  }
}
</style>
