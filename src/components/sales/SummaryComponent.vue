<template>
  <div class="below">
    <div class="edge"><h1 @click="$emit('go-to-stage', 5)">&lt;</h1></div>
    <div class="below2">
      <h4>Level: {{ level }}</h4>
      <h4>Kurs: {{ course }}</h4>
      <h4>Board: {{ bodyHeight }}cm & {{ bodyWeight }}kg</h4>
      <h4>Neo: {{ gender }} {{ clothingSize }}</h4>
      <h4>Datum: {{ date }}</h4>
      <h4>Zeit: {{ timeSlot }}</h4>
    </div>
    <div class="below2">
      <h4>Name: {{ name }}</h4>
      <h4>E-mail: {{ email }}</h4>
      <h4>Handy: {{ handy }}</h4>
      <h3 v-if="course === 'Schnuppern'">Price: 30 €</h3>
      <h3 v-if="course === 'Einzelkurs'">Price: 90 €</h3>
      <h3 v-if="course === 'Tagestour'">Price: 150 €</h3>
      <button>Order now!</button>
    </div>
    <div class="edge"></div>
  </div>
</template>
<script>
export default {
  name: 'SummaryComponent',
  props: {
    bodyHeight: {},
    bodyWeight: {},
    clothingSize: {},
    course: {},
    date: {},
    email: {},
    gender: {},
    goToStage: {},
    handy: {},
    level: {},
    name: {},
    timeSlot: {},
  },
};
</script>
<style scoped></style>
