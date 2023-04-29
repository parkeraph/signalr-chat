<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleHomeClick = () => {
    router.push({name: 'Home'});
}
</script>

<template>
  <section class="navbar-wrapper">
    <div @click="handleHomeClick" class="nav-title">SignalR Chat</div>
  </section>
</template>

<style>
    .navbar-wrapper {
        background-color: #2c3e50;
        color: #fff;
        padding: .5rem;
        height: fit-content;
        max-height: 2rem;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
    }
    .nav-title {
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>