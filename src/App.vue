<script setup>
// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

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
  <swiper-container class="swiper">
    <swiper-slide><WelcomeComponent/></swiper-slide>
    <swiper-slide><ConvincerComponent/></swiper-slide>
    <swiper-slide><SalesComponent/></swiper-slide>
  </swiper-container>
  <AboutComponent/>
  <ContactComponent/>
</template>

<style scoped>

</style>
