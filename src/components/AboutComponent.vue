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
  background: linear-gradient(0deg, var(--underwater-color) 20%, var(--underwater-color) 30%, var(--water-color) 70%, var(--water-color) 80%);
  height: 100vh;
  background-size: 100% 150%;

  animation: underwater 4s ease infinite;
}
@keyframes underwater {
  0%{background-position:0 20%}
  50%{background-position:0 80%}
  100%{background-position:0 20%}
}
p{
  margin: 0; /* Margin ist woher auch immer auf 16px eingestellt und erstellt unschönen weißen rand zwischen den components */
}
</style>
