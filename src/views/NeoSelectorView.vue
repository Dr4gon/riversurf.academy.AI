<template>
  <div class='container'>
    <div class='view neo'>
      <h1>Neopren Generator</h1>
      <p>Du suchst nach einem passenden Neopren Anzug für dein nächstes Riversurf Abenteuer? Was für einen Neopren Anzug
        du brauchst und auf was du beim Kauf achten solltest, erfährst du hier in.</p>
      <label>
        Welche Wassertemperatur hat dein Zielgewässer?
        <select v-model='waterTemperature'>
          <option disabled value="">Bitte auswählen</option>
          <option value=''>über 23°</option>
          <option value=''>19° - 23°</option>
          <option value=''>15° - 20°</option>
          <option value=''>12° - 17°</option>
          <option value=''>9° - 13°</option>
          <option value=''>unter 9°</option>
        </select>
      </label>
      <label>
        Wie ist dein Geschlecht?
        <select v-model='gender'>
          <option disabled value="">Bitte auswählen</option>
          <option value=''>Männlich</option>
          <option value=''>Weiblich</option>
        </select>
      </label>
      <button @click='submit'>Start</button>
    </div>
  </div>
</template>

<script>

</script>

<style>
.neo {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
