<template>
  <div class="container about-background">
    <div class="view">
      <div class="video-upload">
        <h3>Empfohlen durch Empfehlungen</h3>
        <div class="testimonials">
          <img class="testimonial-img" src="@/assets/surfer-girl.png" />
          <p>Vroni: "De Long ist mega gut die Kleinigkeiten zu entdecken und mich dadruch weiterzubringen."</p>
        </div>
        <audio controls src="src/assets/possibilities.mp3"></audio>
      </div>
      <form class="video-upload">
        <h3>Lade dein Surf-Video für persönliches Feedback hoch</h3>
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
input {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid var(--water-color);
}

button {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid var(--water-color);
  background-color: var(--water-color);
  color: black;
}

.video-upload {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
}

.testimonials {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 5px;
}

.testimonial-img {
  width: 30vw;
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
