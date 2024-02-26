import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const messageStore = defineStore('messages', {
  state: () => ({
    messages: [
      {
        sender: 'assistant',
        content: 'Hey, ich bin eine Surfassistent im Training. Welche Frage zum Riversurfen hast du?',
      },
    ],
  }),
  actions: {
    async askRiversurfAssistant(userQuestion) {
      try {
        this.messages.push({ sender: 'user', content: userQuestion });

        const uuid = localStorage.getItem('userIdentifier');
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/request', {
          text: userQuestion,
          uuid: uuid,
        });

        this.messages.push({ sender: 'assistant', content: response.data.reply });
      } catch (error) {
        console.error('Fehler beim Senden der Anfrage:', error);
        this.messages.push(`Fehler: ${error.message}`);
      }
    },
  },
});
