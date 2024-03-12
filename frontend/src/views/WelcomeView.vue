<template>
  <div class="container">
    <div class="view">
      <form class="chat-window">
        <div class="chat-text">
          <div v-for="message in this.messages">
            <div v-if="message.role === 'user'" class="chat-message-user">
              <span class="chat-message chat-message-maincolor">{{ message.content }}</span>
            </div>
            <div v-else class="chat-message-assistant">
              <div class="chat-message chat-message-secondarycolor">
                <span>{{ message.content }}</span>
                <div class="tooltip">
                  <img src="@/assets/poop.png" />
                  <span class="tooltiptext">Falls dir diese Antwort nicht hilft, einmal hier klicken</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.processing" class="chat-message-assistant">
            <div class="dot-stretching"></div>
          </div>
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
  mounted() {
    this.loadMessageHistory();
  },
  computed: {
    ...mapState(messageStore, ['messages', 'processing']),
  },
  methods: {
    ...mapActions(messageStore, ['askRiversurfAssistant', 'loadMessageHistory']),
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
  overflow: auto; /* Add scrollbar, when needed */
}

.chat-message {
  display: flex;
  flex-direction: column; /* Needed for the poop button */
  border-radius: 5px;
  padding: 5px;
  color: white;
  margin-bottom: 5px;
  max-width: 75%;
}

.chat-message-maincolor {
  background-color: var(--water-color);
}

.chat-message-secondarycolor {
  background-color: var(--underwater-color);
}

.chat-message-assistant {
  display: flex;
  justify-content: flex-start;
}

.chat-message-assistant img {
  width: 20px;
}
/* From https://stackoverflow.com/questions/609273/convert-an-image-to-grayscale-in-html-css */

img {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
img:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}

/** Adapted from here: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_right */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  max-width: 75%;
  background-color: #fcd232;
  color: #ba6b46;
  text-align: center;
  border-radius: 6px;
  padding: 5px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -5px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.chat-message-user {
  display: flex;
  justify-content: flex-end;
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

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--lightestgrey);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Taken from https://codepen.io/nzbin/pen/GGrXbp */

/**
 * ==============================================
 * Dot Stretching
 * ==============================================
 */
.dot-stretching {
  margin-left: 25px;
  margin-top: 10px;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--underwater-color);
  color: var(--underwater-color);
  transform: scale(1.25, 1.25);
  animation: dot-stretching 2s infinite ease-in;
}
.dot-stretching::before,
.dot-stretching::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-stretching::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--underwater-color);
  color: var(--underwater-color);
  animation: dot-stretching-before 2s infinite ease-in;
}
.dot-stretching::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--underwater-color);
  color: var(--underwater-color);
  animation: dot-stretching-after 2s infinite ease-in;
}

@keyframes dot-stretching {
  0% {
    transform: scale(1.25, 1.25);
  }
  50%,
  60% {
    transform: scale(0.8, 0.8);
  }
  100% {
    transform: scale(1.25, 1.25);
  }
}
@keyframes dot-stretching-before {
  0% {
    transform: translate(0) scale(0.7, 0.7);
  }
  50%,
  60% {
    transform: translate(-20px) scale(1, 1);
  }
  100% {
    transform: translate(0) scale(0.7, 0.7);
  }
}
@keyframes dot-stretching-after {
  0% {
    transform: translate(0) scale(0.7, 0.7);
  }
  50%,
  60% {
    transform: translate(20px) scale(1, 1);
  }
  100% {
    transform: translate(0) scale(0.7, 0.7);
  }
}
</style>
