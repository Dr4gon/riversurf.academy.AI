import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const messageStore = defineStore('messages', {
  state: () => ({
    messages: [
      {
        sender: 'assistant',
        content: 'Hey, ich bin ein Surfassistent im Training. Welche Frage zum Riversurfen hast du?',
      },
    ],
    processing: false,
  }),
  actions: {
    async askRiversurfAssistant(userQuestion) {
      try {
        this.messages.push({ sender: 'user', content: userQuestion });

        const uuid = localStorage.getItem('userIdentifier');
        this.processing = true;
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/request', {
          text: userQuestion,
          uuid: uuid,
        });

        this.processing = false;
        this.messages.push({ sender: 'assistant', content: response.data.reply });
      } catch (error) {
        this.processing = false;
        console.error('Fehler beim Senden der Anfrage:', error);
        this.messages.push(`Fehler: ${error.message}`);
      }
    },
  },
});
