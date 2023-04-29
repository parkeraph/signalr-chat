<script setup lang='ts'>
    import { defineEmits, ref } from 'vue';
    import { IUserInfo } from '../model/IUserInfo';
    
    const emit = defineEmits(['submit','close']);
    //define refs for userName companyName and birthDate
    const userName = ref('');
    const companyName = ref('');
    const birthDate = ref('');

    const handleSubmit = () => {
        const model: IUserInfo = {
            userName: userName.value,
            companyName: companyName.value,
            birthDate: new Date(birthDate.value)
        };
        //emit submit event with model
        emit('submit', model);
    }


</script>

<template>
    <section class="modal-wrapper"> 
        <div class="modal-body">
            <p>User Information:</p>

            <div class="form">
                <input v-model="userName" type="text" id="username" placeholder="username" />
                <input v-model="companyName" type="text" id="company" placeholder="company" />
                <input v-model="birthDate" type="date" id="birthdate" placeholder="birthdate" />
                <div class="form-buttons">
                    <button @click="handleSubmit">Enter</button>
                    <button @click="$emit('close')">Cancel</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.modal-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-body {
    width:50%;
    margin: 0 auto;
    height: fit-content;
    background-color: #2c3e50;
    color: #fff;
    padding: 1rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media only screen and (max-width: 600px) {
    .modal-body {
        width: 80%;
        margin: 0 auto;
    }
}

p {
    font-size: 1.5rem;
    text-align: left;
    margin-left: 6%;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
}

input {
    padding: .5rem;
    font-size: medium;
    background-color: #2c3e50;
    color: #a3a2a2;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid #fff;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a3a2a2;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #a3a2a2;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #a3a2a2;
}

.form-buttons {
    display: flex;
    justify-content: start;
    gap: 1rem
}

button {
    margin-top: 1rem;
    padding: .5rem;
    width: 7rem;
    font-size: medium;
    border: none;
    background-color: #394f65;
    color: #fff;
    cursor: pointer;
}
</style>