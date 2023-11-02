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
            <option value='über 23'>über 23°</option>
            <option value='19 - 23'>19° - 23°</option>
            <option value='15 - 20'>15° - 20°</option>
            <option value='12 - 17'>12° - 17°</option>
            <option value='9 - 13'>9° - 13°</option>
            <option value='unter 9'>unter 9°</option>
          </select>
        </label>
        <br>
        <label>
          Wie ist dein Geschlecht?
          <select v-model='gender'>
            <option disabled value=''>Bitte auswählen</option>
            <option value='m'>Männlich</option>
            <option value='w'>Weiblich</option>
          </select>
        </label>
        <br>
        <button @click='submit'>Start</button>
      </div>
      <div class='generatedContent' v-if='submitted'>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterTemperature: '',
      gender: '',
      submitted: false
    };
  },
  methods: {
    submit() {
      if(this.waterTemperature && this.gender) {
        this.submitted = true;
      } else {
        alert('Bitte füllen Sie beide Felder aus.');
      }
    }
  }
};
</script>

<style>
.neo {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
