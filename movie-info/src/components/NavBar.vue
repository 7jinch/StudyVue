<template>
  <nav class="navbar">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">About</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
};
</script>

<style scoped>
.navbar {
  background-color: black;
  padding: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 1em;
}
</style>
