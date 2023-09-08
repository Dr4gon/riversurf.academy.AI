<template>
  <div class="container">
    <div class="view">
      <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
      <div class="centered-box" ref="observerTarget">
        <div class="header" :class="{ 'move-to-top': stage >= 1 }">
          <h1 class="centered-text" :class="{ 'smaller-text': stage >= 1 }">DO YOU WANT TO RIDE WITH ME?</h1>
        </div>
        <div class="booking-steps" v-if="stage >= 1">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          <div v-if="stage === 1">Schritt 1: Erfahrung</div>
          <div v-if="stage === 2">Schritt 2: Kursauswahl</div>
          <div v-if="stage === 3">Schritt 3: Boardauswahl</div>
          <!-- ... weitere Schritte -->
          <button @click="prevStep">Zurück</button>
          <button @click="nextStep">Weiter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stage: 0, // Startwert
      observer: null,
    };
  },
  computed: {
    progress() {
      return (this.stage / 7) * 100;
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.1 });
    this.observer.observe(this.$refs.observerTarget);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          this.stage = 1;
        }, 3000);
        this.observer.disconnect();
      }
    },
    nextStep() {
      if (this.stage < 7) {
        this.stage++;
      }
    },
    prevStep() {
      if (this.stage > 1) {
        this.stage--;
      }
    },
  },
};
</script>

<style scoped>
.centered-box {
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 1s ease;
}

.move-to-top {
  top: 0;
  transform: translate(-50%, 0);
}

.centered-text {
  font-family: 'Lilita One', cursive;
  font-size: 5rem;
  transition: font-size 1s ease;
}

.smaller-text {
  font-size: 2.5rem;
}

.booking-steps {
  padding-top: 3rem;
}

.progress-bar {
  height: 20px;
  background-color: lightslategray;
  transition: width 0.5s ease;
}
</style>
