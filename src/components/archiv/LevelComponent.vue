<template>
  <div class="below" v-if="substage === 0">
    <div class="edge"></div>
    <div class="below3">
      <img @click="goToSubStage(1)" src="../../assets/sales/Beginner.png" alt="Beginner" />
    </div>
    <div class="below3">
      <img @click="goToSubStage(2)" src="../../assets/sales/Intermediate.png" alt="Intermediate" />
    </div>
    <div class="below3">
      <img @click="goToSubStage(3)" src="../../assets/sales/Professional.png" alt="Professional" />
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 1">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Beginner.png" alt="Beginner" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 2);
          $emit('update-level', 'Beginner');
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 2">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Intermediate.png" alt="Intermediate" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 2);
          $emit('update-level', 'Intermediate');
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 3">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Professional.png" alt="Professional" /></div>
    <div class="below2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </p>
      <button @click="goToSubStage(0)">zurück</button>
      <button
        @click="
          $emit('go-to-stage', 2);
          $emit('update-level', 'Professional');
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
  name: 'LevelComponent',
  props: {
    goToStage: {},
    level: {},
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
