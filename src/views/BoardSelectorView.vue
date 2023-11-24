<template>
  <div class="container">
    <div class="view selector">
      <form id="boardSelectorData">
        <h1>Board Selector</h1>
        <p>
          <input id="weight" v-model="weight" @blur="checkWeight" placeholder="Your body weight 68" />
          <label for="weigth">kg</label>
        </p>
        <p>
          <input id="height" v-model="height" @blur="checkHeight" placeholder="Your body heigth in 174" />
          <label for="height">cm</label>
        </p>
        <p>
          <select id="surfLevel" v-model="surfLevel">
            <option disabled value="">Level auswählen</option>
            <option value="beginner">Stehe auf der Welle</option>
            <option value="advanced">Fahre sauber Turns</option>
            <option value="pro">Hab Tricks drauf</option>
          </select>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardSelectorView',
  computed: {},
  data() {
    return {
      weight: '',
      height: '',
      surfLevel: '',
    };
  },
  methods: {
    checkWeight() {
      console.log(this.weight);
    },
    checkHeight() {
      console.log(this.height);
    },
  },
};
</script>

<style scoped></style>
