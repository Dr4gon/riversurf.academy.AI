<script setup>

</script>

<template>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5"
              placeholder="Was willst du mit mir besprechen?"
              style="width: 300px; height: 150px; resize: none" required></textarea>

    <input type="submit" value="Submit">
  </form>
</template>

<style scoped>

</style>
