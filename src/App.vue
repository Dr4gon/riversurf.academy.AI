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
  <AboutComponent/>
  <ContactComponent/>
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
  background-color: #3E606F;
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

</style>
