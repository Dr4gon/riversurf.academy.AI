<script>
import axios from 'axios';

export default {
  name: 'ContactComponent',
  computed: {
    submitMessageRight() {
      return `Danke für deine Nachricht ${this.name}, ich melde mich bei dir 🤙`;
    },
    submitMessageFalse() {
      return `Hier ist etwas schief gelaufen ${this.name}, bitte probiere es erneut.`;
    },
  },
  data() {
    return {
      isSubmitted: false, // Indicates if the form has been successfully submitted
      isFast: false, // Indicates if the form submission was suspiciously quick (potential spam)
      name: '', // Store the name input
      email: '', // Store the email input
      info: '', // Honeypot for spam bots. Not visible to users
      message: '', // Store the message input
    };
  },
  methods: {
    // Set the start time for submit (spam protection)
    setStartTime() {
      if (this.startTime === 0) {
        this.startTime = Date.now();
      }
    },
    validateName() {
      this.setStartTime();
      const nameElem = document.getElementById('name');
      if (this.name.trim() === '') {
        nameElem.setCustomValidity('Gebe einen Namen ein 😉');
      } else {
        nameElem.setCustomValidity('');
      }
    },
    validateEmail() {
      this.setStartTime();
      const emailElem = document.getElementById('email');

      if (this.email.indexOf('@') === -1) {
        emailElem.setCustomValidity('Die E-Mail-Adresse muss ein "@" enthalten. 🤨');
        return;
      }

      let [localPart, domainPart] = this.email.split('@');

      if (localPart.length === 0) {
        emailElem.setCustomValidity('Die E-Mail-Adresse muss einen Namen vor dem "@" haben. 😄');
        return;
      }

      if (domainPart.indexOf('.') === -1) {
        emailElem.setCustomValidity('Der Domain-Teil der E-Mail-Adresse muss einen "." enthalten. 😄');
        return;
      }

      let [domain, tld] = domainPart.split('.');

      if (domain.length === 0) {
        emailElem.setCustomValidity('Der Domain-Teil der E-Mail-Adresse muss einen Domain-Namen vor dem "." haben. 😄');
        return;
      }

      if (tld.length < 2 || tld.length > 7) {
        emailElem.setCustomValidity(
          'Die Top-Level-Domain (z.B. ".com") der E-Mail-Adresse muss zwischen 2 und 7 Zeichen lang sein. 😄'
        );
        return;
      }

      emailElem.setCustomValidity('');
    },

    // Message input validation
    validateMessage() {
      this.setStartTime();
      const messageElem = document.getElementById('message');
      if (this.message.trim() === '') {
        messageElem.setCustomValidity('Schreib mir eine Nachricht 😄');
      } else {
        messageElem.setCustomValidity('');
      }
    },

    // Main function to handle form submit
    async submit() {
      // Validate inputs
      this.validateName();
      this.validateEmail();
      this.validateMessage();

      // Fetch form elements
      const nameElem = document.getElementById('name');
      const emailElem = document.getElementById('email');
      const messageElem = document.getElementById('message');

      // Check if any form input has custom errors
      if (nameElem.validity.customError || emailElem.validity.customError || messageElem.validity.customError) {
        messageElem.reportValidity();
        emailElem.reportValidity();
        nameElem.reportValidity();

        return;
      }
      // Check form submission speed to identify potential spam
      this.endTime = Date.now();
      if (this.endTime - this.startTime > 4000 && !info.value) {
        try {
          const response = await axios.post('http://localhost:3000/contact', {
            name: this.name,
            email: this.email,
            message: this.message,
          });

          if (response.status === 200) {
            this.isSubmitted = true;
          } else {
            console.log('Response Status != 200');
            // handle error based on response
            this.isFast = true;
          }
        } catch (error) {
          console.error('Da ist ein Fehler beim Absenden des Formulars passiert 🙄');
          this.isFast = true;
        }
      } else {
        console.log('Das Formular wurde zu schnell abgeschickt');
        this.isFast = true;
      }
    },
    // Reset form and feedback messages
    closeMessage() {
      this.isSubmitted = false;
      this.isFast = false;
      this.name = '';
      this.message = '';
      this.email = '';
      this.startTime = 0;
      this.endTime = 0;
    },
  },
};
</script>

<template>
  <div class="container contact-background">
    <div class="view">
      <form class="contact" id="contact-form" @submit.prevent="submit">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" @input="validateName" placeholder="Name" required />
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" @input="validateEmail" placeholder="email@mail.com" required />
        </div>
        <div>
          <input type="text" id="info" v-model="info" style="display: none" />

          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="message"
            @input="validateMessage"
            name="message"
            rows="5"
            placeholder="Was willst du mit mir besprechen?"
            class="message"
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Schreib mir!" />
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

.contact-background {
  background: var(--underwater-color);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 1%, var(--underwater-color) 100%);
}

.message {
  width: 300px;
  height: 150px;
  resize: none;
}
</style>
