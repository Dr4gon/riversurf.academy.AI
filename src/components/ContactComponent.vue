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
      nameIsInvalid: false, // Indicates if the name input is invalid
      email: '', // Store the email input
      emailIsInvalid: false, // Indicates if the email input is invalid
      info: '', // Honeypot for spam bots. Not visible to users
      message: '', // Store the message input
      messageIsInvalid: false, // Indicates if the message input is invalid

      NAME_ERROR_MSG: 'Gebe einen Namen ein 😉',
      MESSAGE_ERROR_MSG: 'Schreib mir eine Nachricht 😄',
      EMAIL_ERROR_MSG: 'Gebe eine gültige E-Mail-Adresse ein 😄',
    };
  },
  methods: {
    // Set the start time for submit (spam protection)
    startTimer() {
      if (this.startTime === 0) {
        this.startTime = Date.now();
      }
    },
    validateName() {
      this.startTimer();
      this.nameIsInvalid = this.validateTrimmed(this.name);
    },
    validateMessage() {
      this.startTimer();
      this.messageIsInvalid = this.validateTrimmed(this.message);
    },
    validateTrimmed(value) {
      return value.trim() === '' ? true : false;
    },
    validateEmail() {
      this.startTimer();
      this.emailIsInvalid = true;

      if (this.email === '') {
        return;
      }

      if (this.email.indexOf('@') === -1) {
        this.EMAIL_ERROR_MSG = 'Die E-Mail-Adresse muss ein "@" enthalten. 🤨';
        return;
      }

      let [localPart, domainPart] = this.email.split('@');
      let [domain, tld] = domainPart.split('.');

      switch (true) {
        case localPart.length === 0:
          this.EMAIL_ERROR_MSG = 'Die E-Mail-Adresse muss einen Namen vor dem "@" haben. 😄';
          break;
        case domainPart.indexOf('.') === -1:
          this.EMAIL_ERROR_MSG = 'Der Domain-Teil der E-Mail-Adresse muss einen "." enthalten. 😄';
          break;
        case domain.length === 0:
          this.EMAIL_ERROR_MSG = 'Der Domain-Teil der E-Mail-Adresse muss einen Domain-Namen vor dem "." haben. 😄';
          break;
        case tld.length < 2 || tld.length > 7:
          this.EMAIL_ERROR_MSG =
            'Die Top-Level-Domain (z.B. ".com") der E-Mail-Adresse muss zwischen 2 und 7 Zeichen lang sein. 😄';
          break;
        default:
          this.emailIsInvalid = false;
      }
    },

    // Main function to handle form submit
    async submit() {
      // Check form submission speed to identify potential spam
      this.endTime = Date.now();
      if (this.endTime - this.startTime < 4000 && info.value) {
        console.log('Das Formular wurde zu schnell abgeschickt');
        this.isFast = true;
        return; // Prevent form submission
      }

      const response = await axios
        .post('http://localhost:3000/contact', {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then(response => {
          if (response.status === 200) {
            this.isSubmitted = true;
          } else {
            this.isFast = true;
          }
        })
        .catch(error => {
          console.error('Da ist ein Fehler beim Absenden des Formulars passiert 🙄');
          this.isFast = true;
        });
    },
    // Reset form and feedback messages
    closeMessage() {
      this.isSubmitted = false;
      this.isFast = false;
      this.name = '';
      this.nameIsInvalid = false;
      this.message = '';
      this.messageIsInvalid = false;
      this.email = '';
      this.emailIsInvalid = false;
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
          <input type="text" id="name" v-model="name" @blur="validateName" placeholder="Name" required />
          <span class="error" v-if="nameIsInvalid">{{ this.NAME_ERROR_MSG }}</span>
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" @blur="validateEmail" placeholder="email@mail.com" required />
          <span class="error" v-if="emailIsInvalid">{{ this.EMAIL_ERROR_MSG }}</span>
        </div>
        <div>
          <input type="text" id="info" v-model="info" hidden />

          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="message"
            @blur="validateMessage"
            name="message"
            rows="5"
            placeholder="Was willst du mit mir besprechen?"
            class="message"
            required
          >
          </textarea>
          <span class="error" v-if="messageIsInvalid">{{ this.MESSAGE_ERROR_MSG }}</span>
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

.error {
  margin-left: 2px;
  color: red;
}
</style>
