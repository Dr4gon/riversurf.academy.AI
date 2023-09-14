<template>
  <div class="below">
    <div class="edge"><h1 @click="$emit('goToStage', 3)">&lt;</h1></div>
    <div class="below2">
      <DatePicker v-model="localDate" mode="date" :min-date="new Date()" />
    </div>
    <div class="below2">
      <fieldset>
        <legend>Available Timeslots:</legend>
        <input type="radio" id="small" name="time" value="10.00 - 12.00" v-model="localTimeSlot" />
        <label for="small">10.00 - 12.00</label>
        <br />
        <input type="radio" id="medium" name="time" value="12.00 - 14.00" v-model="localTimeSlot" />
        <label for="small">12.00 - 14.00</label>
        <br />
        <input type="radio" id="large" name="time" value="14.00 - 16.00" v-model="localTimeSlot" />
        <label for="small">14.00 - 16.00</label>
        <br />
        <input type="radio" id="large" name="time" value="16.00 - 18.00" v-model="localTimeSlot" />
        <label for="small">16.00 - 18.00</label>
      </fieldset>
      <button
        @click="
          $emit('goToStage', 5);
          console.log(date, timeSlot);
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
</template>
<script>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
export default {
  name: 'TimeComponent',
  components: { DatePicker },
  props: {
    date: {},
    goToStage: {},
    substage: {},
    timeSlot: {},
  },
  data() {
    return {
      localDate: this.date,
      localTimeSlot: this.timeSlot,
    };
  },
};
</script>
<style></style>
