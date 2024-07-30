<template>
  <!-- 클래스를 동적으로 추가하기 -->
  <div class="event" :class="{ show: isOpen }">
    <p>{{ evnetText }}</p>
    <button @click="isOpen = false">닫기</button>
  </div>
</template>

<script>
export default {
  name: 'EventComponent',
  // 상위 컴포넌트로부터 받은 props
  props: {
    evnetText: String,
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style>
.event {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: small;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
}

.show {
  display: flex;
}

.event p {
  margin: 0;
}

.event button {
  margin: 0;
}
</style>
