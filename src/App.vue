<script setup>
// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
register();

import Swiper from 'swiper';
import WelcomeComponent from '@/components/WelcomeComponent.vue';
import ConvincerComponent from '@/components/ConvincerComponent.vue';
import SalesComponent from '@/components/SalesComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';

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
  <div class="main-container">
    <swiper-container class="swiper">
      <swiper-slide>
        <WelcomeComponent />
      </swiper-slide>
      <swiper-slide>
        <ConvincerComponent />
      </swiper-slide>
      <swiper-slide>
        <SalesComponent />
      </swiper-slide>
    </swiper-container>
  </div>
  <div class="containedBubbles">
    <!-- Changes of the bubble number only works in concert with changing the css bubble number as well -->
    <div class="bubble" v-for="n in 50"></div>
    <AboutComponent />
    <ContactComponent />
  </div>
</template>

<style scoped lang="scss">
html,
body {
  overflow: hidden; /* Verhindert doppeltes Scrollen */
  box-sizing: border-box;
}

.main-container {
  background-color: var(--water-color);
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fcfff5;
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
    opacity: 0.5;
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

.containedBubbles {
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

/* Changes of the bubble number only works in concert with changing the html generated bubble number as well*/
$numberOfBubbles: 50;

@function calcRandomValueBetween($min, $max, $unit) {
  @return floor(random() * ($max - $min + 1) + $min) + $unit;
}

@for $i from 1 through $numberOfBubbles {
  /* Some variance in bubble styling */
  $bgpos: if($i % 2 == 0, top right, center);
  $bubbleLength: calcRandomValueBetween(5, 100, px);

  .bubble:nth-child(#{$i}) {
    background: radial-gradient(ellipse at $bgpos, #b8c6c6 0%, var(--underwater-color) 30%, var(--water-color) 100%);
    width: $bubbleLength; /* Must be equal to get round bubbles */
    height: $bubbleLength; /* Must be equal to get round bubbles */
    left: calcRandomValueBetween(1, 100, vw);
    bottom: calcRandomValueBetween(1, 100, vh);
    animation: move +#{$i} infinite calcRandomValueBetween(3, 15, s);
  }

  @keyframes move#{$i} {
    0% {
      bottom: -100px;
    }
    100% {
      /* burst bubbles at different heights */
      bottom: calcRandomValueBetween(0, 100, vh);
      transform: translate(calcRandomValueBetween(-100, 200, px), 0);
      opacity: 0;
    }
  }
}
</style>
