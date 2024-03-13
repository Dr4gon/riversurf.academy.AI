import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const messageStore = defineStore('messages', {
  state: () => ({
    messages: [
      {
        role: 'assistant',
        content: import.meta.env.VITE_WELCOME_MSG,
        useful: true,
      },
    ],
    processing: false,
  }),
  actions: {
    async loadMessageHistory() {
      try {
        const uuid = localStorage.getItem('userIdentifier');
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/openai/' + uuid);
        console.log('Nachrichten geladen:', response.data);
        this.messages.push(...response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Nachrichten:', error);
      }
    },
    async askRiversurfAssistant(userQuestion) {
      try {
        this.messages.push({ role: 'user', content: userQuestion });

        const uuid = localStorage.getItem('userIdentifier');
        this.processing = true;
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/openai', {
          text: userQuestion,
          uuid: uuid,
        });

        this.processing = false;
        this.messages.push({
          role: 'assistant',
          content: response.data.reply,
          useful: true,
        });
      } catch (error) {
        this.processing = false;
        console.error('Fehler beim Senden der Anfrage:', error);
        this.messages.push({ role: 'assistent', content: `Fehler: ${error.response.data.message}` });
      }
    },
    async markUnuseful(index) {
      this.toggleUseful(index, false);
    },
    async markUseful(index) {
      this.toggleUseful(index, true);
    },
    async toggleUseful(index, useful) {
      this.messages[index].useful = useful;
      const uuid = localStorage.getItem('userIdentifier');
      const response = this.messages[index].content;
      await axios.put(import.meta.env.VITE_BACKEND_URL + '/api/openai/' + uuid, {
        response: response,
        useful: useful,
      });
    },
  },
});
