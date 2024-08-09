<template>
  <h1>{{ title }}</h1>
  <!-- 기존에 props(아래로 단방향임)를 보내주던 방법 -->
  <!-- <testComp :title="title" @onInput="(val) => (title = val)" /> -->
  <testComp v-model="title" />
</template>

<script setup>
import { ref, reactive } from 'vue';
import testComp from './testComp.vue';

// ref로 상태변수 생성하기
const count = ref(0);
const str = ref('hello');
const obj = ref({ name: 'name' }); // 원시타입, 객체 다 가능

// 사용할 때는 value로 꺼내야 함(template에서는 value 안 붙이고 바로 사용 가능)
console.log(count.value);
console.log(obj.value.name);

// reactive로 상태변수 생성하기
const reactiveObj = reactive({ name: 'name' }); // 객체만 생성 가능함

// 얘는 바로 꺼낼 수 있음
console.log(reactiveObj.name);

let title = ref('title');
</script>

<style lang="scss" scoped></style>
