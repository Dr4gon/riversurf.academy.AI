<template>
  <div class="container">
    <div class="view view-layout">
      <form class="chat-window">
        <textarea disabled class="chat-text">{{ answer }}</textarea>
        <div class="chat-actions">
          <input class="text" v-model="userQuestion" placeholder="What's your question about riversurfing?" />
          <button class="chat-button" type="submit" @click.prevent="askChatGPT">
            <img class="chat-send-img" src="@/assets/message-in-a-bottle.png" />
          </button>
        </div>

        <!-- <p>
          <label class="center">OR</label>
        </p> -->

        <!-- <p>
          <label>Upload a video for feedback</label>
          <input type="file" accept="video/*" />
          <button>Upload</button>
        </p> -->
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WelcomeView',
  data() {
    return {
      userQuestion: '',
      answer: '',
    };
  },
  created() {
    this.checkAndSetUUID();
  },
  methods: {
    checkAndSetUUID() {
      if (!localStorage.getItem('userIdentifier')) {
        localStorage.setItem('userIdentifier', this.generateUUID());
      }
    },
    generateUUID() {
      return self.crypto.randomUUID(); // funktioniert nur via https oder local
    },
    async askChatGPT() {
      try {
        const uuid = localStorage.getItem('userIdentifier');
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/request', {
          text: this.userQuestion,
          uuid: uuid,
        });
        this.answer = response.data.reply;
      } catch (error) {
        console.error('Fehler beim Senden der Anfrage:', error);
        this.answer = `Fehler: ${error.message}`;
      }
    },
  },
};
</script>

<style scoped>
input {
  width: inherit;
  border-radius: 0 0 0 5px;
  border: none;
  outline-width: 0;
}

p {
  margin-left: 6vw;
  margin-right: 6vw;
}

.center {
  margin-left: 30vw;
}

.chat-text {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px 10px 0 0;
  width: inherit;
  height: 94%;
}

.chat-actions {
  display: inline-flex;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  width: inherit;
}

.chat-window {
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
}

.chat-button {
  border-radius: 0 0 5px 0;
  border: none;
  background-color: #ffffff;
}

.chat-send-img {
  height: 2vh;
  display: flex;
}
</style>
