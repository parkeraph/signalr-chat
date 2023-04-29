<script setup lang="ts">
import { ref, onMounted } from 'vue'; 
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import  * as signalR  from "@microsoft/signalr";

import ChatBubble from '../components/ChatBubble.vue'
import { useUserStore } from '../store/UserStore';

interface IMessage {
    id: number;
    username: string;
    message: string;
    isUserMessage: boolean;
}


const router = useRouter();
const store = useUserStore();
const { userName } = storeToRefs(store);
const messages  = ref<IMessage[]>([])
const messageInput = ref<string>('');

let connection = new signalR.HubConnectionBuilder()
        .withUrl("http://192.168.0.4:5212/api/chatHub")
        .build();

const handleSend = () => {
    if(!userName.value) return

    messages.value.push({id: messages.value.length, username: userName.value, message: messageInput.value, isUserMessage: true})
    connection
        .invoke("SendMessage", userName.value, messageInput.value)
    messageInput.value = "";
        
}

onMounted(async () => {
    if(!userName.value){
        router.push({name: 'Home'});
    }

    connection.on("ReceiveMessage", (user, message) => {
        //trim user name to remove white space
        user = user.trim();
        console.log("recieved message: ",user, message, user !== userName.value);
        if(user !== userName.value){
            messages.value.push({id: messages.value.length, username: user, message: message, isUserMessage: false})
        }
    });

    try{
        await connection.start();
        console.log("connected")
    } catch(e){
        console.log(e)
    }

});

</script>

<template>
  <section class="chat-wrapper">
    
    <div class="conversation-window">
        <ChatBubble 
            v-for="message in messages" 
            :key="message.id" 
            :username="message.username" 
            :message="message.message" 
            :isUserMessage="message.isUserMessage" 
        />
    </div>

    <div class="chat-input">
        <textarea v-model="messageInput"></textarea>
        <button @click="handleSend">Send</button>
    </div>
  </section>
</template>

<style scoped>
    .chat-wrapper {
        width: 100%;
        min-height: 100%;
        background-color: transparent;
    }

    .chat-input{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: grid;
        grid-template-columns: [text] 80% [submit] 20%;
        grid-template-rows: 65px;
    }


    @media only screen and (max-width: 600px) {
        .chat-input {
            grid-template-columns: [text] 70% [submit] 30%;
        }
    }

    @media only screen and (min-width: 1000px) {
        .chat-input {
            grid-template-columns: [text] 90% [submit] 10%;
        }
    }

    textarea {
        resize: none;
        grid-column: 1 / span 1;
    }

    button {
        grid-column: 2 / span 1;
    }

    .conversation-window {
        height: fit-content;
        overflow-y: scroll;
    }

</style>