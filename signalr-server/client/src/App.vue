<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar>
  </Navbar>
  <router-view class="app-container"></router-view>
</template>

<style scoped>
.counter {
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
}

.title {
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.app-container {
  margin-top: 3rem;

}
</style>
