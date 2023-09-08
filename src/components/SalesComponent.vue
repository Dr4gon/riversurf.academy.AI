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

<template>
  <div class="container">
    <div class="view">
      <div ref="observerTarget">
        <div>
          <h1>DO YOU WANT TO RIDE WITH ME?</h1>
        </div>
        <div v-if="stage >= 1">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          <div v-if="stage === 1">Schritt 1: Erfahrung</div>
          <div v-if="stage === 2">Schritt 2: Kursauswahl</div>
          <div v-if="stage === 3">Schritt 3: Boardauswahl</div>
          <button @click="prevStep">Zurück</button>
          <button @click="nextStep">Weiter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  height: 20px;
  background-color: lightslategray;
  transition: width 0.5s ease;
}
</style>
