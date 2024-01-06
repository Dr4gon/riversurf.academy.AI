<template>
  <div class="container">
    <div class="view">
      <p>
        <input type="text" placeholder="What's your question about riversurfing?" />
        <button v-bind="askChatGPT()">Ask</button>
      </p>

      <p>
        <label class="center">OR</label>
      </p>

      <p>
        <label>Upload a video for feedback</label>
        <input type="file" accept="video/*" />
        <button>Upload</button>
      </p>
    </div>
  </div>
</template>

<script>
import { OpenAI } from 'openai';

export default {
  name: 'WelcomeView',
  computed: {},
  data() {
    return {};
  },
  methods: {
    async askChatGPT() {
      // console.log(import.meta.env.VITE_OPENAI_API_KEY);
      // dangerouslyAllowBrowser temporarely allows security issue with secret key until backend is up and running
      const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

      // openai.chat.completions
      //   .create({
      //     messages: [{ role: 'system', content: 'What do you about riversurfing?' }],
      //     model: 'gpt-3.5-turbo',
      //   })
      //   .then(response => {
      //     console.log(response.choices[0]);
      //   });
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
