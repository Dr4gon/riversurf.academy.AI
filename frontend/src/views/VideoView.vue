<template>
  <div class="container about-background">
    <div class="view">
      <div class="video-upload">
        <h3>Empfohlen durch Empfehlungen</h3>
        <div class="items">
          <div class="item">
            <div class="content">
              <div class="testimonials">
                <img class="testimonial-img" src="@/assets/surfer-girl.png" />
                <p>Vroni: "De Long ist mega gut die Kleinigkeiten zu entdecken und mich dadurch weiterzubringen."</p>
              </div>
              <audio controls src="src/assets/possibilities.mp3"></audio>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="testimonials">
                <img class="testimonial-img" src="@/assets/surfer-boy.png" />
                <p>
                  Basti: "Surfen macht super viel Spaß. De Long ermutigt mich dabei dran zu bleiben und die Frustmomente
                  gut zu überwinden."
                </p>
              </div>
              <audio controls src="src/assets/possibilities.mp3"></audio>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="testimonials">
                <img class="testimonial-img" src="@/assets/surfer-girl.png" />
                <p>
                  Vicky: "Der Coach verrät mir immer wieder Tipps und Tricks, damit mir das Surfen Spaß macht. Dafür
                  gibt's ne Kaffee oben druff."
                </p>
              </div>
              <audio controls src="src/assets/possibilities.mp3"></audio>
            </div>
          </div>
        </div>
      </div>
      <form class="video-upload" enctype="multipart/form-data">
        <h3>Lade dein Surf-Video für persönliches Feedback hoch</h3>
        <input type="text" placeholder="Wie heißt du?" v-model="name" />
        <input type="text" placeholder="Was willst du lernen?" v-model="goal" />
        <input type="text" placeholder="Wie ist deine Mailadresse?" v-model="email" />
        <input id="video" type="file" accept="video/*" />
        <button type="submit" @click.prevent="doUpload">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data';

export default {
  name: 'AboutView',
  data() {
    return {
      name: '',
      goal: '',
      email: '',
    };
  },
  mounted() {
    // https://stackoverflow.com/questions/59008427/add-easing-smooth-scroll-to-click-and-drag-with-js
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelMomentumTracking();
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      beginMomentumTracking();
    });

    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      var prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      velX = slider.scrollLeft - prevScrollLeft;
    });

    // Momentum

    var velX = 0;
    var momentumID;

    slider.addEventListener('wheel', e => {
      cancelMomentumTracking();
    });

    function beginMomentumTracking() {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    }
    function cancelMomentumTracking() {
      cancelAnimationFrame(momentumID);
    }
    function momentumLoop() {
      slider.scrollLeft += velX;
      velX *= 0.95;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    }
  },
  methods: {
    async doUpload() {
      console.log('Upload video');

      let video = document.getElementById('video').files[0];
      let form = new FormData();

      form.append('video', video);
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/upload/video', form, {
        headers: form.getHeaders ? form.getHeaders() : { 'Content-Type': 'multipart/form-data' },
      });
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
  padding-left: 10px;
  padding-right: 10px;
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

.items {
  display: flex;
  gap: 8px;
  scroll-snap-type: x mandatory;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;

  /* Hide scrollbar in IE and Edge */
  -ms-overflow-style: none;

  overflow-x: scroll;
  overflow-y: hidden;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  user-select: none;
  cursor: pointer;
}

.items::-webkit-scrollbar {
  display: none;
}

.items.active {
  background: var(--water-color);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  flex-shrink: 0;
  width: 100%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
