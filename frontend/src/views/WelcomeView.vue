<template>
  <div class="container">
    <div class="view view-layout">
      <form class="chat-window">
        <div class="chat-text">
          <span class="chat-message">Welche Frage hast du zum Riversurfen?</span>
          <span v-for="message in this.messages" class="chat-message">{{ message }}</span>
        </div>
        <div class="chat-actions">
          <input class="text" v-model="userQuestion" />
          <button class="chat-button" type="submit" @click.prevent="doAskRiversurfAssistant">
            <img class="chat-send-img" src="@/assets/message-in-a-bottle.png" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { messageStore } from '../stores/message-store';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'WelcomeView',
  data() {
    return {
      userQuestion: '',
    };
  },
  computed: {
    ...mapState(messageStore, ['messages']),
  },
  methods: {
    ...mapActions(messageStore, ['askRiversurfAssistant']),
    doAskRiversurfAssistant() {
      this.askRiversurfAssistant(this.userQuestion);
      this.userQuestion = '';
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
  height: 95%;
}

.chat-message {
  background-color: var(--water-color);
  display: flex;
  border-radius: 5px;
  padding: 5px;
  color: white;
  margin-bottom: 5px;
  width: fit-content;
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
