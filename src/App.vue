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

<style scoped lang="scss">
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

$numberOfBubbles: 18;

@function randomBubble($min,$max){
  @return floor(random()*($max - $min + 1) + $min);
}

@function randomTime($min,$max){
  @return floor(random()*($max - $min + 1) + $min)+s;
}
  
@for $i from 1 through $numberOfBubbles {
  $bgpos: if($i % 2 == 0 ,top right,center);
  $bubbleLength: randomBubble(5, 100)+px;

  .bubble:nth-child(#{$i}){
      background: radial-gradient(ellipse at $bgpos, #b8c6c6 0%,#30b3d3 46%,#20628c 100%);
      width: $bubbleLength;
      height: $bubbleLength;
      left: randomBubble(1, 100)+vw;
      bottom: randomBubble(1, 100)+vh;
      animation: move+#{$i} infinite randomTime(3, 15);
    }
     
  @keyframes move#{$i}{
    0%{
      bottom: -100px
    }
    100%{
      bottom: randomBubble(0, 100)+vh;
      transform: translate(randomBubble(-100, 200)+px, 0);
      opacity: 0;
    }
  }
}

</style>
