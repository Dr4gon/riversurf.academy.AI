<template>
  <div class="container">
    <div class="view">
      <input v-model="weight" @blur="checkWeight" placeholder="Write down your body weight in kg" />
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
