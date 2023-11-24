<template>
  <div class="container">
    <div class="view selector">
      <form id="boardSelectorData">
        <h1>Board Selector</h1>
        <input id="weight" v-model="weight" @blur="checkWeight" placeholder="Your body weight" />
        <label for="weigth">kg</label>
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
    };
  },
  methods: {
    checkWeight() {
      console.log(this.weight);
    },
  },
};
</script>

<style scoped></style>
