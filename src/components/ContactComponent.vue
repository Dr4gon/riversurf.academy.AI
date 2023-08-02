<script setup>
import { ref } from 'vue';

const isSubmitted = ref(false);
const isFast = ref(false);
const name = ref('');
const message = ref('');
const startTime = ref(0);
const endTime = ref(0);
const info = ref(''); //Honeypot

const setStartTime = () => {
  if (startTime.value === 0) {
    startTime.value = Date.now();
  }
};

const handleSubmit = () => {
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
  startTime.value = 0;
  endTime.value = 0;
};
</script>

<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" @input="setStartTime" placeholder="Name" required>

    <input type="text" id="info" v-model="info" style="display: none;">

    <label for="message">Message:</label>
    <textarea id="message" v-model="message" @input="setStartTime" name="message" rows="5"
              placeholder="Was willst du mit mir besprechen?"
              style="width: 300px; height: 150px; resize: none" required></textarea>

    <input type="submit" value="Submit">

    <div v-if="isSubmitted" class="submit-message">
      <span @click="closeMessage" class="close-btn">X</span>
      <p>Danke für deine Nachricht {{ name }}, ich melde mich bei dir 🤙</p>
    </div>

    <div v-if="isFast" class="submit-message">
      <span @click="closeMessage" class="close-btn">X</span>
      <p>Hier ist etwas schief gelaufen {{ name }}, bitte probiere es erneut.</p>
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
