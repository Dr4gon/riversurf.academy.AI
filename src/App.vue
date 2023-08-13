<script setup>
// import Swiper bundle with all modules installed
import {register} from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
register();

import Swiper from 'swiper';
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import ConvincerComponent from "@/components/ConvincerComponent.vue";
import SalesComponent from "@/components/SalesComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
});
</script>

<template>
    <div class="water">
      <swiper-container class="swiper">
        <swiper-slide>
          <WelcomeComponent/>
        </swiper-slide>
        <swiper-slide>
          <ConvincerComponent/>
        </swiper-slide>
        <swiper-slide>
          <SalesComponent/>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="containedBubbles">

      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>
      <div class='bubble'></div>

      <AboutComponent/>
      <ContactComponent/>
    </div>
</template>

<style scoped>
html, body {
  height: 100%;
  overflow: hidden; /* Verhindert doppeltes Scrollen */
  box-sizing: border-box;
}

.swiper, AboutComponent, ContactComponent {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

swiper-slide {
  height: 100%;
}
.water {
  background-color: var(--water-color);
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #FCFFF5;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 12vh;
    opacity: .5;
    border-radius: 47%;
    animation-duration: 10s;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}

.containedBubbles{
  /* Needed for the water bubbles to stay underwater */
  position: relative;
  overflow: hidden;
}

/* Bubbles under water */
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
@-webkit-keyframes move9 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 0vh;
    transform: translate(-4px, 0);
    opacity: 0;
  }
}
@keyframes move9 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 0vh;
    transform: translate(-4px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(10) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 75px;
  height: 75px;
  left: 54vw;
  bottom: 6vh;
  -webkit-animation: move10 infinite 7s;
          animation: move10 infinite 7s;
}
@-webkit-keyframes move10 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 97vh;
    transform: translate(-82px, 0);
    opacity: 0;
  }
}
@keyframes move10 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 97vh;
    transform: translate(-82px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(11) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 61px;
  height: 61px;
  left: 91vw;
  bottom: 9vh;
  -webkit-animation: move11 infinite 14s;
          animation: move11 infinite 14s;
}
@-webkit-keyframes move11 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 28vh;
    transform: translate(-26px, 0);
    opacity: 0;
  }
}
@keyframes move11 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 28vh;
    transform: translate(-26px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(12) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 72px;
  height: 72px;
  left: 56vw;
  bottom: 45vh;
  -webkit-animation: move12 infinite 10s;
          animation: move12 infinite 10s;
}
@-webkit-keyframes move12 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 72vh;
    transform: translate(172px, 0);
    opacity: 0;
  }
}
@keyframes move12 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 72vh;
    transform: translate(172px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(13) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 85px;
  height: 85px;
  left: 73vw;
  bottom: 20vh;
  -webkit-animation: move13 infinite 13s;
          animation: move13 infinite 13s;
}
@-webkit-keyframes move13 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 45vh;
    transform: translate(27px, 0);
    opacity: 0;
  }
}
@keyframes move13 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 45vh;
    transform: translate(27px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(14) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 46px;
  height: 46px;
  left: 96vw;
  bottom: 61vh;
  -webkit-animation: move14 infinite 10s;
          animation: move14 infinite 10s;
}
@-webkit-keyframes move14 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 57vh;
    transform: translate(72px, 0);
    opacity: 0;
  }
}
@keyframes move14 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 57vh;
    transform: translate(72px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(15) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 16px;
  height: 16px;
  left: 3vw;
  bottom: 85vh;
  -webkit-animation: move15 infinite 3s;
          animation: move15 infinite 3s;
}
@-webkit-keyframes move15 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 2vh;
    transform: translate(172px, 0);
    opacity: 0;
  }
}
@keyframes move15 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 2vh;
    transform: translate(172px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(16) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 12px;
  height: 12px;
  left: 34vw;
  bottom: 3vh;
  -webkit-animation: move16 infinite 14s;
          animation: move16 infinite 14s;
}
@-webkit-keyframes move16 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 29vh;
    transform: translate(21px, 0);
    opacity: 0;
  }
}
@keyframes move16 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 29vh;
    transform: translate(21px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(17) {
  background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 72px;
  height: 72px;
  left: 30vw;
  bottom: 99vh;
  -webkit-animation: move17 infinite 9s;
          animation: move17 infinite 9s;
}
@-webkit-keyframes move17 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 60vh;
    transform: translate(88px, 0);
    opacity: 0;
  }
}
@keyframes move17 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 60vh;
    transform: translate(88px, 0);
    opacity: 0;
  }
}
.bubble:nth-child(18) {
  background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
  width: 30px;
  height: 30px;
  left: 7vw;
  bottom: 30vh;
  -webkit-animation: move18 infinite 8s;
          animation: move18 infinite 8s;
}
@-webkit-keyframes move18 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 70vh;
    transform: translate(21px, 0);
    opacity: 0;
  }
}
@keyframes move18 {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 70vh;
    transform: translate(21px, 0);
    opacity: 0;
  }
}

</style>
