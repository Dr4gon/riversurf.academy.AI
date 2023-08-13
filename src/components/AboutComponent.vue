<script setup>

</script>

<template>
  <div class="temp container">
  
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>
    <div class='bubble'></div>

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

/* Bubbles under water */
/* .canvas {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #edfffa 0%, #31c5d6 100%);
  position: relative;
  overflow: hidden;
} */
.bubble {
  display: block;
  border-radius: 100%;
  opacity: 0.8;
  position: absolute;
}
.bubble:nth-child(1) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 81px;
  height: 81px;
  left: 61vw;
  bottom: 32vh;
  -webkit-animation: move1 infinite 6s;
          animation: move1 infinite 6s;
}
@-webkit-keyframes move1 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 77vh;
    transform: translate(-92px, 0);
    opacity: 0;
  }
}
@keyframes move1 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 77vh;
    transform: translate(-92px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(2) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 69px;
  height: 69px;
  left: 30vw;
  bottom: 82vh;
  -webkit-animation: move2 infinite 9s;
          animation: move2 infinite 9s;
}
@-webkit-keyframes move2 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 22vh;
    transform: translate(80px, 0);
    opacity: 0;
  }
}
@keyframes move2 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 22vh;
    transform: translate(80px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(3) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 67px;
  height: 67px;
  left: 93vw;
  bottom: 81vh;
  -webkit-animation: move3 infinite 7s;
          animation: move3 infinite 7s;
}
@-webkit-keyframes move3 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 39vh;
    transform: translate(22px, 0);
    opacity: 0;
  }
}
@keyframes move3 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 39vh;
    transform: translate(22px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(4) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 55px;
  height: 55px;
  left: 3vw;
  bottom: 44vh;
  -webkit-animation: move4 infinite 14s;
          animation: move4 infinite 14s;
}
@-webkit-keyframes move4 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 71vh;
    transform: translate(109px, 0);
    opacity: 0;
  }
}
@keyframes move4 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 71vh;
    transform: translate(109px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(5) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 37px;
  height: 37px;
  left: 10vw;
  bottom: 12vh;
  -webkit-animation: move5 infinite 5s;
          animation: move5 infinite 5s;
}
@-webkit-keyframes move5 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 14vh;
    transform: translate(79px, 0);
    opacity: 0;
  }
}
@keyframes move5 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 14vh;
    transform: translate(79px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(6) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 97px;
  height: 97px;
  left: 11vw;
  bottom: 93vh;
  -webkit-animation: move6 infinite 14s;
          animation: move6 infinite 14s;
}
@-webkit-keyframes move6 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 48vh;
    transform: translate(149px, 0);
    opacity: 0;
  }
}
@keyframes move6 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 48vh;
    transform: translate(149px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(7) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 95px;
  height: 95px;
  left: 48vw;
  bottom: 91vh;
  -webkit-animation: move7 infinite 7s;
          animation: move7 infinite 7s;
}
@-webkit-keyframes move7 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 27vh;
    transform: translate(9px, 0);
    opacity: 0;
  }
}
@keyframes move7 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 27vh;
    transform: translate(9px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(8) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 68px;
  height: 68px;
  left: 75vw;
  bottom: 33vh;
  -webkit-animation: move8 infinite 7s;
          animation: move8 infinite 7s;
}
@-webkit-keyframes move8 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 61vh;
    transform: translate(59px, 0);
    opacity: 0;
  }
}
@keyframes move8 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 61vh;
    transform: translate(59px, 0);
    opacity: 0;
  }
}

p{
  margin: 0; /* Margin ist woher auch immer auf 16px eingestellt und erstellt unschönen weißen rand zwischen den components */
}
</style>
