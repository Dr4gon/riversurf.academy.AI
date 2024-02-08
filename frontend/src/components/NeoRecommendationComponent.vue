<template>
  <div>
    <p>Wassertemperatur: {{ waterTemperature }}</p>
    <p>Geschlecht: {{ gender }}</p>
    <p>Level: {{ level }}</p>
    <p>Budget: {{ budget }}</p>
  </div>
</template>

<script>
export default {
  props: {
    waterTemperature: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    budget: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
