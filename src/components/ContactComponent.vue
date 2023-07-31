<script setup>
import {ref} from 'vue';

const isSubmitted = ref(false);

const handleSubmit = () => {
  // TODO Logic einfügen wenn Backend steht, für die Einfachheit ist ein Timer gesetzt
  setTimeout(() => {
    isSubmitted.value = true;
    document.getElementById('contact-form').reset();
    setTimeout(() => {
      isSubmitted.value = false;
    }, 5000);
  }, 500);
};
</script>

<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5"
              placeholder="Was willst du mit mir besprechen?"
              style="width: 300px; height: 150px; resize: none" required></textarea>

    <input type="submit" value="Submit">
    <div v-if="isSubmitted" class="submit-message">Danke für deine Nachricht, ich melde mich bei dir 🤙</div>
  </form>
</template>

<style scoped>
.submit-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
</style>
