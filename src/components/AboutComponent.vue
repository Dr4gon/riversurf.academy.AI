<script setup>

</script>

<template>
  <div class="temp container">
    <div>
      <h1>What you need to know about me 😎</h1>
      <video width="640" height="360" controls>
        <source src="https://www.riversurf.academy/WillkommensVideo_Edit_sub.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
.temp{
  background: rgb(13,20,23);
  background: linear-gradient(0deg, rgba(13,20,23,1) 9%, var(--water-color) 50%);
  height: 100vh;
}
p{
  margin: 0; /* Margin ist woher auch immer auf 16px eingestellt und erstellt unschönen weißen rand zwischen den components */
}
</style>
