<script setup>
import {computed, ref} from 'vue';

const isSubmitted = ref(false); // Indicates if the form has been successfully submitted
const isFast = ref(false);      // Indicates if the form submission was suspiciously quick (potential spam)
const name = ref('');           // Store the name input
const email = ref('')           // Store the email input
const info = ref('');           // Honeypot for spam bots. Not visible to users
const message = ref('');        // Store the message input
const startTime = ref(0);       // Track the time when user starts typing
const endTime = ref(0);         // Track the time when user submits the form

// dynamic submission messages
const submitMessageRight = computed(() => `Danke für deine Nachricht ${name.value}, ich melde mich bei dir 🤙`)
const submitMessageFalse = computed(() => `Hier ist etwas schief gelaufen ${name.value}, bitte probiere es erneut.`)

// Set the start time for handleSubmit (spam protection)
const setStartTime = () => {
  if (startTime.value === 0) {
    startTime.value = Date.now();
  }
};

// Name input validation
const handleNameInput = () => {
  setStartTime();
  const nameElem = document.getElementById('name');
  if (name.value.trim() === '') {
    nameElem && nameElem.setCustomValidity('Gebe einen Namen ein 😉');
  } else {
    nameElem && nameElem.setCustomValidity('');
  }
};

// Email input validation
const handleEmailInput = () => {
  setStartTime();
  const emailElem = document.getElementById('email');

  if (email.value.indexOf('@') === -1) {
    emailElem && emailElem.setCustomValidity('Die E-Mail-Adresse muss ein "@" enthalten. 🤨');
    return;
  }

  let [localPart, domainPart] = email.value.split('@');

  if (localPart.length === 0) {
    emailElem && emailElem.setCustomValidity('Die E-Mail-Adresse muss einen Namen vor dem "@" haben. 😄');
    return;
  }

  if (domainPart.indexOf('.') === -1) {
    emailElem && emailElem.setCustomValidity('Der Domain-Teil der E-Mail-Adresse muss einen "." enthalten. 😄');
    return;
  }

  let [domain, tld] = domainPart.split('.');

  if (domain.length === 0) {
    emailElem && emailElem.setCustomValidity('Der Domain-Teil der E-Mail-Adresse muss einen Domain-Namen vor dem "." haben. 😄');
    return;
  }

  if (tld.length < 2 || tld.length > 7) {
    emailElem && emailElem.setCustomValidity('Die Top-Level-Domain (z.B. ".com") der E-Mail-Adresse muss zwischen 2 und 7 Zeichen lang sein. 😄');
    return;
  }

  emailElem && emailElem.setCustomValidity('');
};

// Message input validation
const handleMessageInput = () => {
  setStartTime();
  const messageElem = document.getElementById('message');
  if (message.value.trim() === '') {
    messageElem && messageElem.setCustomValidity('Schreib mir eine Nachricht 😄');
  } else {
    messageElem && messageElem.setCustomValidity('');
  }
};

// Main function to handle form submit
const handleSubmit = () => {
  // Validate inputs
  handleNameInput();
  handleEmailInput();
  handleMessageInput();

  // Fetch form elements
  const nameElem = document.getElementById('name');
  const emailElem = document.getElementById('email');
  const messageElem = document.getElementById('message');

  // Check if any form input has custom errors
  if (
    nameElem && nameElem.validity.customError ||
    emailElem && emailElem.validity.customError ||
    messageElem && messageElem.validity.customError
  ) {
    messageElem && messageElem.reportValidity();
    emailElem && emailElem.reportValidity();
    nameElem && nameElem.reportValidity();

    return;
  }
  // Check form submission speed to identify potential spam
  endTime.value = Date.now();
  if ((endTime.value - startTime.value) > 4000 && !info.value) {
    isSubmitted.value = true;
  } else {
    isFast.value = true;
  }
};

// Reset form and feedback messages
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
  <div class="temp">
    <div class="container">
      <form id="contact-form" @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" @input="handleNameInput" placeholder="Name">
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" @input="handleEmailInput" placeholder="email@mail.com">
        </div>
        <div>
          <input type="text" id="info" v-model="info" style="display: none;">

          <label for="message">Message:</label>
          <textarea id="message" v-model="message" @input="handleMessageInput" name="message" rows="5"
                    placeholder="Was willst du mit mir besprechen?"
                    style="width: 300px; height: 150px; resize: none"></textarea>
        </div>
        <div>
          <input type="submit" value="Schreib mir!">
        </div>
        <div v-if="isSubmitted" class="submit-message">
          <span @click="closeMessage" class="close-btn">X</span>
          <p class="submitMessageRight">{{ submitMessageRight }}</p>
        </div>

        <div v-if="isFast" class="submit-message">
          <span @click="closeMessage" class="close-btn">X</span>
          <p class="submitMessageFalse">{{ submitMessageFalse }}</p>
        </div>
      </form>
    </div>
  </div>
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

.temp {
  height: 100vh;
  background: var(--underwater-color);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 1%, var(--underwater-color) 100%);
}
</style>
