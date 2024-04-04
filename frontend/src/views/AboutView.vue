<template>
  <div class="container about-background">
    <div class="view">
      <form class="video-upload">
        <h2>Lade dein Surf-Video für persönliches Feedback hoch</h2>
        <input type="text" placeholder="Wie heißt du?" v-model="name" />
        <input type="text" placeholder="Was willst du lernen?" v-model="goal" />
        <input type="text" placeholder="Wie ist deine Mailadresse?" v-model="email" />
        <input type="file" accept="video/*" />
        <button type="submit" @click.prevent="doUpload">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      name: '',
      goal: '',
      email: '',
    };
  },
  methods: {
    doUpload() {
      console.log('Upload video');
    },
  },
};
</script>

<style scoped>
.video-upload {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
}

.about-background {
  background: linear-gradient(
    0deg,
    var(--underwater-color) 20%,
    var(--underwater-color) 30%,
    var(--water-color) 70%,
    var(--water-color) 80%
  );
  background-size: 100% 150%;
  animation: underwater 4s ease infinite;
}

@keyframes underwater {
  0% {
    background-position: 0 20%;
  }
  50% {
    background-position: 0 80%;
  }
  100% {
    background-position: 0 20%;
  }
}
</style>
