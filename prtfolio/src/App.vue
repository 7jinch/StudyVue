<script setup>
<<<<<<< HEAD
import NavBar from './components/NavBar.vue';

import data from './assets/portfolio'; // 포트폴리오 데이터 가져오기
</script>

<template>
  <NavBar />
  <!-- router로 지정한 컴포넌트를 렌더링함 -->
  <!-- 하위 컴포넌트로 props 전달도 가능함-->
  <router-view :data="data" />
=======
import Title from './components/Titiel.vue';
import Portfolio from './components/Portfolio.vue';
</script>

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Doolee</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Title />
    <Portfolio />
  </div>
>>>>>>> 66e45cbd59f4d41a0849106fdcf9be15802f4e49
</template>

<style scoped lang="scss"></style>
