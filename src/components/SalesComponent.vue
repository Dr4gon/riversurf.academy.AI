<script setup>
import { ref } from 'vue';

//v-calendar
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const date = ref(new Date());
</script>

<template>
  <div class="container">
    <div class="div-item">
      <h2>Welcher Kurs?</h2>
      <div>
        <span>Basis #1</span>
        <input type="radio" id="kurs-1" value="true" />
        <label for="kurs-1"></label>
      </div>
      <div>
        <span>Basis #2</span>
        <input type="radio" id="kurs-2" value="true" />
        <label for="kurs-2"></label>
      </div>
      <div>
        <span>Basis #3</span>
        <input type="radio" id="kurs-3" value="true" />
        <label for="kurs-3"></label>
      </div>
    </div>

    <div class="div-item">
      <DatePicker v-model="date" mode="date" :min-date="new Date()" />
    </div>

    <div class="div-item">
      <h2>Welche extras?</h2>
      <div>
        <span>Board</span>
        <input type="radio" id="extra1-yes" value="true" />
        <label for="extra1-yes">Ja</label>
        <input type="radio" id="extra1-no" value="false" />
        <label for="extra1-no">Nö</label>
      </div>
      <div>
        <span>Neo</span>
        <input type="radio" id="extra2-yes" value="true" />
        <label for="extra2-yes">Ja</label>
        <input type="radio" id="extra2-no" value="false" />
        <label for="extra2-no">Nö</label>
      </div>
      <div>
        <span>Abholen</span>
        <input type="radio" id="extra3-yes" value="true" />
        <label for="extra3-yes">Ja</label>
        <input type="radio" id="extra3-no" value="false" />
        <label for="extra3-no">Nö</label>
      </div>
      <div>
        <span>Essen</span>
        <input type="radio" id="extra4-yes" value="true" />
        <label for="extra4-yes">Ja</label>
        <input type="radio" id="extra4-no" value="false" />
        <label for="extra4-no">Nö</label>
      </div>
    </div>
  </div>
  <div class="div-button">
    <button>Jetzt Buchen!</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.div-item {
  background-color: var(--water-color);
  border-radius: 15px;
  padding: 15px;
  margin: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.div-item div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.div-item span {
  flex: 1;
}
.div-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
