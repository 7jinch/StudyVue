<script setup>
import { onMounted, ref, watch } from 'vue';
import ChildComp from './components/ChildComp.vue';

// 상태변수
let countAddOne = ref(0);
let countAddTwo = ref(0);
let title = 'hello world';
let color = ref('green');

// 생명주기 훅
onMounted(() => {
  console.log('mounted');
});

// 상태변수 값 증가 함수 정의
const increaseCount = () => {
  countAddOne.value++; // ref로 생성한 상태변수의 값은 value 속성으로 가져옴
};

// 상태변수 감지 메서드
watch(
  color, // 감시할 상태변수
  () => {
    console.log('color 변경');
  }
);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button
      @click="
        increaseCount();
        countAddTwo += 2; // 템플릿에서는 자동으로 ref를 unwrap해 주기 때문에 value 속성을 사용하지 않아도 됨
      "
    >
      더하기
    </button>
    <p>{{ countAddOne }}</p>
    <p>{{ countAddTwo }}</p>
    <!-- 바인딩 문법를 사용해서 하위 컴포넌트에 상태변수를 props로 전달 -->
    <ChildComp :color="color" bgColor="yellow" />
    <button
      @click="
        if (color === 'red') color = 'green';
        else color = 'red';
      "
    >
      색깔 변경하기
    </button>
  </div>
</template>

<style scoped></style>
