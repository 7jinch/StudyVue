<template>
  <section id="about">
    <h1>about</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="profile" />
        <figcaption>About Doolee</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam a
        cum dolorem earum hic similique quia vitae voluptate? Accusantium, ea
        atque. Quis sapiente molestiae cum tempore quisquam quaerat
        perspiciatis!
      </p>
    </div>

    <article class="row mt-5">
      <h2>skills</h2>
      <dl v-for="data in datas">
        <dt class="lead">{{ data.name }}</dt>
        <dd>
          <div class="progress" role="progressbar">
            <div class="progress-bar" :style="{ width: data.level }"></div>
          </div>
        </dd>
      </dl>
    </article>
  </section>
</template>

<script setup>
import datas from '../assets/about';
</script>

<style lang="scss" scoped>
figure img {
  width: 100%;
}
</style>
