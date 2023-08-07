<script setup>
import {computed, ref} from 'vue';

const isSubmitted = ref(false);
const isFast = ref(false);
const name = ref('');
const email = ref('')
const info = ref(''); //Honeypot
const message = ref('');
const startTime = ref(0);
const endTime = ref(0);

const submitMessageRight = computed(() => `Danke für deine Nachricht ${name.value}, ich melde mich bei dir 🤙`)
const submitMessageFalse = computed(() => `Hier ist etwas schief gelaufen ${name.value}, bitte probiere es erneut.`)

const setStartTime = () => {
  if (startTime.value === 0) {
    startTime.value = Date.now();
  }
};

const handleNameInput = () => {
  setStartTime();
  const nameElem = document.getElementById('name');
  if (name.value.trim() === '') {
    nameElem && nameElem.setCustomValidity('Bitte gebe einen Namen ein 😉');
  } else {
    nameElem && nameElem.setCustomValidity('');
  }
};

const handleEmailInput = () => {
  setStartTime();
  const emailElem = document.getElementById('email');
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
    emailElem && emailElem.setCustomValidity('Bitte geben Sie eine gültige E-Mail-Adresse ein. 🤨');
  } else {
    emailElem && emailElem.setCustomValidity('');
  }
};

const handleMessageInput = () => {
  setStartTime();
  const messageElem = document.getElementById('message');
  if (message.value.trim() === '') {
    messageElem && messageElem.setCustomValidity('Dieses Feld sollte nicht leer sein wenn du mir was sagen möchtest 🤨');
  } else {
    messageElem && messageElem.setCustomValidity('');
  }
};

const handleSubmit = () => {
  handleNameInput();
  handleEmailInput();
  handleMessageInput();

  const nameElem = document.getElementById('name');
  const emailElem = document.getElementById('email');
  const messageElem = document.getElementById('message');


  if (
    nameElem && nameElem.validity.customError ||
    emailElem && emailElem.validity.customError ||
    messageElem && messageElem.validity.customError
  ) {
    return;
  }

  endTime.value = Date.now();
  if ((endTime.value - startTime.value) > 4000 && !info.value) {
    isSubmitted.value = true;
  } else {
    isFast.value = true;
  }
};

const closeMessage = () => {
  isSubmitted.value = false;
  isFast.value = false;
  name.value = '';
  message.value = '';
  email.value = '';
  startTime.value = 0;
  endTime.value = 0;
};
</script>

<template>
  <form id="contact-form" @submit.prevent="handleSubmit">

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" @input="handleNameInput" placeholder="Name">

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" @input="handleEmailInput" placeholder="email@mail.com">

    <input type="text" id="info" v-model="info" style="display: none;">

    <label for="message">Message:</label>
    <textarea id="message" v-model="message" @input="handleMessageInput" name="message" rows="5"
              placeholder="Was willst du mit mir besprechen?"
              style="width: 300px; height: 150px; resize: none"></textarea>

    <input type="submit" value="Submit">

    <div v-if="isSubmitted" class="submit-message">
      <span @click="closeMessage" class="close-btn">X</span>
      <p class="submitMessageRight">{{ submitMessageRight }}</p>
    </div>

    <div v-if="isFast" class="submit-message">
      <span @click="closeMessage" class="close-btn">X</span>
      <p class="submitMessageFalse">{{ submitMessageFalse }}</p>
    </div>

  </form>
</template>

<style scoped>
.submit-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  padding: 17px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

.close-btn {
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;
  font-size: 12px;
}
</style>
