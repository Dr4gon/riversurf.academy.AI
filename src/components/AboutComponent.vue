<script setup></script>

<template>
  <div class="container about-background">
    <div class="view">
      <video controls>
        <source src="https://www.riversurf.academy/WillkommensVideo_Edit_sub.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
.about-background {
  background: linear-gradient(
    0deg,
    var(--underwater-color) 20%,
    var(--underwater-color) 30%,
    var(--water-color) 70%,
    var(--water-color) 80%
  );
  background-size: 100% 150%;
  animation: underwater 4s ease infinite;
}

@keyframes underwater {
  0% {
    background-position: 0 20%;
  }
  50% {
    background-position: 0 80%;
  }
  100% {
    background-position: 0 20%;
  }
}
</style>
