<script>
export default {
  name: 'EquipmentComponent',
  props: {
    bodyHeight: {},
    bodyWeight: {},
    clothingSize: {},
    gender: {},
    goToStage: {},
    substage: {},
  },
  watch: {
    substage(newSubstage, oldSubstage) {},
  },
  data() {
    return {
      substage: 0,
      localBodyHeight: this.bodyHeight,
      localBodyWeight: this.bodyWeight,
      localGender: this.gender,
      localClothingSize: this.clothingSize,
    };
  },
  methods: {
    goToSubStage(targetSubStage) {
      if (targetSubStage >= 0 && targetSubStage <= 3) {
        this.substage = targetSubStage;
      }
    },
    clearBoard() {
      this.localBodyHeight = 0;
      this.localBodyWeight = 0;
    },
    clearClothingSize() {
      this.gender = 0;
      this.clothingSize = '';
    },
  },
};
</script>
<template>
  <div class="below" v-if="substage === 0">
    <div class="edge"><h1 @click="$emit('go-to-stage', 2)">&lt;</h1></div>
    <div class="below2">
      <img @click="goToSubStage(1)" src="../../assets/sales/Board.png" alt="Board" />
    </div>
    <div class="below2">
      <img @click="goToSubStage(2)" src="../../assets/sales/Neo.png" alt="Neo" />
    </div>
    <div class="edge"><h1 @click="$emit('go-to-stage', 4)">&gt;</h1></div>
  </div>
  <div class="below" v-if="substage === 1">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Board.png" alt="Board" /></div>
    <div class="below2">
      <label for="height">Körpergröße (cm):</label>
      <input type="number" id="height" name="height" v-model="localBodyHeight" />
      <br />

      <label for="weight">Gewicht (kg):</label>
      <input type="number" id="weight" name="weight" v-model="localBodyWeight" />
      <br />

      <button
        @click="
          goToSubStage(0);
          clearBoard;
          console.log(localBodyHeight, localBodyWeight);
        "
      >
        zurücksetzen
      </button>
      <button
        @click="
          goToSubStage(0);
          $emit('update-bodyHeight', localBodyHeight);
          $emit('update-bodyWeight', localBodyWeight);
          console.log(bodyHeight, bodyWeight);
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
  <div class="below" v-if="substage === 2">
    <div class="edge"></div>
    <div class="below3"><img src="../../assets/sales/Neo.png" alt="Neo" /></div>
    <div class="below2">
      <fieldset>
        <legend>Geschlecht:</legend>
        <input type="radio" id="male" name="gender" value="male" v-model="localGender" />
        <label for="male">Männlich</label>

        <input type="radio" id="female" name="gender" value="female" v-model="localGender" />
        <label for="female">Weiblich</label>
      </fieldset>

      <fieldset>
        <legend>Größe:</legend>
        <input type="radio" id="small" name="size" value="S" v-model="localClothingSize" />
        <label for="small">S</label>

        <input type="radio" id="medium" name="size" value="M" v-model="localClothingSize" />
        <label for="medium">M</label>

        <input type="radio" id="large" name="size" value="L" v-model="localClothingSize" />
        <label for="large">L</label>

        <input type="radio" id="large" name="size" value="XL" v-model="localClothingSize" />
        <label for="extraLarge">XL</label>
      </fieldset>
      <button
        @click="
          goToSubStage(0);
          clearClothingSize;
          console.log(localGender, localClothingSize);
        "
      >
        zurücksetzen
      </button>
      <button
        @click="
          $emit('update-gender', localGender);
          $emit('update-clothingSize', localClothingSize);
          goToSubStage(0);
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
</template>

<style></style>
