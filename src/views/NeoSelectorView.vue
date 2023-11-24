<template>
  <div class="container">
    <div class="view neo">
      <transition-group name="slide-up">
        <div class="generator" v-if="!submitted">
          <h1>Neopren Generator</h1>
          <p>
            Welchen Neo du brauchst sagt dir unser Neo Generator. Fülle einfach die Felder aus und drücke auf Start.
          </p>
          <label>
            Welche Wassertemperatur hat dein Zielgewässer?
            <select v-model="waterTemperature">
              <option disabled value="">Bitte auswählen</option>
              <option value="Above23Degree">über 23°</option>
              <option value="between19and23Degree">19° - 23°</option>
              <option value="between15and20Degree">15° - 20°</option>
              <option value="between12and17Degree">12° - 17°</option>
              <option value="between9and13Degree">9° - 13°</option>
              <option value="under9Degree">unter 9°</option>
            </select>
          </label>
          <br />
          <label>
            Wie ist dein Geschlecht?
            <select v-model="gender">
              <option disabled value="">Bitte auswählen</option>
              <option value="Male">Männlich</option>
              <option value="Female">Weiblich</option>
            </select>
          </label>
          <br />
          <label>
            Wie ist dein Level?
            <select v-model="level">
              <option disabled value="">Bitte auswählen</option>
              <option value="Beginner">Anfänger</option>
              <option value="Intermediate">Hobby</option>
              <option value="Professional">Professional</option>
            </select>
          </label>
          <br />
          <label>
            Wie hoch ist dein Budget?
            <select v-model="budget">
              <option disabled value="">Bitte auswählen</option>
              <option value="LowBudget">Kleines Budget</option>
              <option value="MidBudget">Mittleres Budget</option>
              <option value="HighBudget">Großes Budget</option>
            </select>
          </label>
          <br />
          <button @click="submit">Start</button>
        </div>
        <div class="generatedContent" v-if="submitted">
          <NeoRecommendationComponent
            :waterTemperature="waterTemperature"
            :gender="gender"
            :level="level"
            :budget="budget"
          />
          <button @click="submitted = false">Zurück</button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import NeoRecommendationComponent from '../components/NeoRecommendationComponent.vue';

export default {
  components: {
    NeoRecommendationComponent,
  },

  data() {
    return {
      waterTemperature: '',
      gender: '',
      budget: '',
      level: '',
      submitted: false,
    };
  },
  methods: {
    submit() {
      if (this.waterTemperature && this.gender && this.budget && this.level) {
        this.submitted = true;
      } else {
        alert('Bitte füllen Sie alle Felder aus.');
      }
    },
  },
};
</script>

<style>
.neo {
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(200px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-200px);
  position: absolute;
}
</style>
