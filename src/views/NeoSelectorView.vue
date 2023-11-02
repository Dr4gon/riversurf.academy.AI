<template>
  <div class='container'>
    <div class='view neo'>
      <div class='generator' v-if='!submitted'>
        <h1>Neopren Generator</h1>
        <p>Du suchst nach einem passenden Neopren Anzug für dein nächstes Riversurf Abenteuer? Was für einen Neopren
          Anzug
          du brauchst und auf was du beim Kauf achten solltest, erfährst du hier in.</p>
        <label>
          Welche Wassertemperatur hat dein Zielgewässer?
          <select v-model='waterTemperature'>
            <option disabled value=''>Bitte auswählen</option>
            <option value='above23'>über 23°</option>
            <option value='between19and23'>19° - 23°</option>
            <option value='between15and20'>15° - 20°</option>
            <option value='between12and17'>12° - 17°</option>
            <option value='between9and13'>9° - 13°</option>
            <option value='under9'>unter 9°</option>
          </select>
        </label>
        <br>
        <label>
          Wie ist dein Geschlecht?
          <select v-model='gender'>
            <option disabled value=''>Bitte auswählen</option>
            <option value='m'>Männlich</option>
            <option value='f'>Weiblich</option>
          </select>
        </label>
        <br>
        <button @click='submit'>Start</button>
      </div>
      <div class='generatedContent' v-if='submitted'>
        <MaleAbove23 v-if="waterTemperature === 'above23' && gender ==='m'" />
        <FemaleAbove23 v-if="waterTemperature ==='above23' && gender==='f'" />
        <MaleBetween19and23 v-if="waterTemperature === 'between19and23' && gender ==='m'" />
        <FemaleBetween19and23 v-if="waterTemperature ==='between19and23' && gender==='f'" />
        <Between15and20 v-if="waterTemperature === 'between15and20'" />
        <Between12and17 v-if="waterTemperature === 'between12and17'" />
        <Between9and13 v-if="waterTemperature === 'between9and13'" />
        <Under9 v-if="waterTemperature === 'under9'" />
        <button @click='submitted = false'>Zurück</button>
      </div>
    </div>
  </div>
</template>

<script>

import MaleAbove23 from '../components/neo/MaleAbove23.vue';
import FemaleAbove23 from '../components/neo/FemaleAbove23.vue';
import MaleBetween19and23 from '../components/neo/MaleBetween19and23.vue';
import FemaleBetween19and23 from '../components/neo/FemaleBetween19and23.vue';
import Between15and20 from '../components/neo/Between15and20.vue';
import Between12and17 from '../components/neo/Between12and17.vue';
import Between9and13 from '../components/neo/Between9and13.vue';
import Under9 from '../components/neo/Under9.vue';

export default {
  components: {
    MaleAbove23,
    FemaleAbove23,
    MaleBetween19and23,
    FemaleBetween19and23,
    Between15and20,
    Between12and17,
    Between9and13,
    Under9,
  },

  data() {
    return {
      waterTemperature: '',
      gender: '',
      submitted: false,
    };
  },
  methods: {
    submit() {
      if (this.waterTemperature && this.gender) {
        this.submitted = true;
      } else {
        alert('Bitte füllen Sie beide Felder aus.');
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
}
</style>
