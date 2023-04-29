<script setup lang="ts">
import { defineProps } from 'vue';

//define props fro username and message
const props = defineProps({
    username: String,
    message: String,
    isUserMessage: Boolean
});

</script>

<template>
  
    <div :class="isUserMessage ? 'chat-section-right' : 'chat-section-left'">
        <div :class="isUserMessage ? 'chat-bubble chat-bubble-from-user' : 'chat-bubble'">
            <span>{{props.username}}</span>
            <span>{{ props.message }}</span>
        </div>
    </div>

</template>

<style scoped>


    .chat-section-left {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
    .chat-section-right {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .chat-bubble {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 1rem;
        margin: .5rem;
        min-width: 30%;
        width:fit-content;
        background-color: #fff;
    }

    .chat-bubble-from-user {
        background-color: #2c3e50;
        color: #fff;
    }


</style>