<template>
  <nav class="navbar">
    <!-- <button class="toggle" @click="$store.commit('toggleButton')"> -->
    <button class="toggle" @click="store.toggleButton()">
      <font-awesome-icon :icon="['fas', 'bars-staggered']" class="icot" />
    </button>
  </nav>
</template>

<script setup>
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: end;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.icon {
  color: #333;
  font-size: 24px;
}
</style>
