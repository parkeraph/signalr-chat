<script setup lang="ts">
    import {ref} from 'vue';
    import { useRouter } from 'vue-router'

    import UserInfoModal from '../components/UserInfoModal.vue';
    import { IUserInfo } from '../model/IUserInfo';
    import { useUserStore } from '../store/UserStore';

    const router = useRouter()
    const showModal = ref(false);
    const store = useUserStore();
    const { setUserInfo } = store;

    const handleUserInfoSubmit = (model: IUserInfo) => {
        console.log(model)
        setUserInfo(model);
        showModal.value = false;
        router.push({name: 'Chat'});
    }
</script>

<template>
  <section class="home-wrapper">
    <h2>
      This chat application was built using Vue 3 and SignalR.
    </h2>

    <button class="enter-button" @click="showModal = true">
        Enter Chat
    </button>

    <UserInfoModal 
        v-if="showModal" 
        @submit="handleUserInfoSubmit"
        @close="showModal = false"
    />
  </section>

</template>

<style>
    .home-wrapper {
        margin-top: 2rem;
        text-align: center;
        padding: 1rem;
    }
    .enter-button {
        padding: .5rem;
        width: 7rem;
        font-size: medium;
        border: none;
        background-color: #394f65;
        color: #fff;
        cursor: pointer;
    }
</style>