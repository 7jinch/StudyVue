<template>
  <div class="search-bar">
    <!-- @submit.prevent: form 전송 이벤트를 막아줌 -->
    <form @submit.prevent>
      <div class="form-group">
        <!-- input 이벤트 발생하면 사용자가 입력한 값을 가져와서 상태변수에 저장 -->
        <input
          @input="inputText = $event.target.value"
          type="search"
          placeholder="지역을 입력해 주세요."
        />
        <!-- 버튼에서 click(또는 enter) 이벤트 발생하면 inputText 상태변수와 함께 onSearchCity라는 이벤트명으로 전달 -->
        <!-- <button @click="$emit('onSearchCity', inputText)"> -->
        <!-- 이제 store에 요청하기 -->
        <button
          @click="
            // $store.commit('onSearchCity', inputText); // 검색할 도시명 입력
            // $store.dispatch('getWeather'); // 날씨 데이터 업데이트
            store.onSearchCity(inputText);
            store.getWeather();
          "
        >
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

const store = useStore();

const inputText = ref(''); // 상태변수 선언(빈 문자열)
const emit = defineEmits(['onSearchCity']); // 이벤트명을 배열로 전달하고 emit 정의하기
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 8px 20px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0 20px;

  form {
    .form-group {
      display: flex;
      input {
        width: 100%;
        border: none;
        padding: 1em 0;
        font-size: 18px;
        outline: none;
      }
      button {
        background: transparent;
        border: none;
        &:hover {
          cursor: pointer;
        }
        .icon {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
