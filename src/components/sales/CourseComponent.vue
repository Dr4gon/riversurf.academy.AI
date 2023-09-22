<template>
  <div class="below" v-if="substage === 0">
    <div class="edge"><h1 @click="$emit('go-to-stage', 1)">&lt;</h1></div>
    <div class="below3">
      <img @click="goToSubStage(1)" src="../../assets/sales/Schnuppern.png" alt="Schnuppern" />
    </div>
    <div class="below3">
      <img @click="goToSubStage(2)" src="../../assets/sales/Einzelkurs.png" alt="Einzelkurs" />
    </div>
    <div class="below3">
      <img @click="goToSubStage(3)" src="../../assets/sales/Tagestour.png" alt="Tagestour" />
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 1">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Schnuppern.png" alt="Schnuppern" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <h2>30 €</h2>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 3);
          $emit('update-course', 'Schnuppern');
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 2">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Einzelkurs.png" alt="Einzelkurs" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <h2>90 €</h2>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 3);
          $emit('update-course', 'Einzelkurs');
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 3">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Tagestour.png" alt="Tagestour" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <h2>150 €</h2>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 3);
          $emit('update-course', 'Tagestour');
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
</template>
<script>
export default {
  name: 'CourseComponent',
  props: {
    course: {},
    goToStage: {},
  },

  data() {
    return {
      substage: 0,
    };
  },

  methods: {
    goToSubStage(targetSubStage) {
      this.substage = targetSubStage;
    },
  },
};
</script>
<style></style>
