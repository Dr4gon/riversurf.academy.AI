<template>
  <div class='container'>
    <div class='view'>
      <form>
        <input class='text' v-model='userQuestion' placeholder="What's your question about riversurfing?" />
        <button type='submit' @click.prevent='askChatGPT'>Ask</button>
      </form>
      <h3>{{ answer }}</h3>
      <p>
        <label class='center'>OR</label>
      </p>

      <p>
        <label>Upload a video for feedback</label>
        <input type='file' accept='video/*' />
        <button>Upload</button>
      </p>
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
      return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    async askChatGPT() {
      try {
        const response = await axios.post('http://localhost:3000/api/request', { text: this.userQuestion, uuid: uuid });
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
  width: 55vw;
}

p {
  margin-left: 6vw;
  margin-right: 6vw;
}

.center {
  margin-left: 30vw;
}
</style>
