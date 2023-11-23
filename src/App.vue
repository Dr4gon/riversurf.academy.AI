<script setup>
// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
register();

import Swiper from 'swiper';
import WelcomeView from '@/views/WelcomeView.vue';
import ConvincerView from '@/views/ConvincerView.vue';
import SalesView from '@/views/SalesView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import BoardSelectorView from '@/views/BoardSelectorView.vue';

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

// turn your phone
import { ref, onMounted, onUnmounted } from 'vue';
import NeoSelectorView from '@/views/NeoSelectorView.vue';

const isLandscape = ref(false);
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const checkOrientation = () => {
  isLandscape.value = window.innerWidth > window.innerHeight;
};

onMounted(() => {
  checkOrientation();
  window.addEventListener('resize', checkOrientation);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation);
});
</script>

<template>
  <div class="main-container">
    <swiper-container class="swiper" initial-slide="2">
      <swiper-slide>
        <BoardSelectorView />
      </swiper-slide>
      <swiper-slide>
        <NeoSelectorView />
      </swiper-slide>
      <swiper-slide>
        <WelcomeView />
      </swiper-slide>
      <swiper-slide>
        <ConvincerView />
      </swiper-slide>
      <swiper-slide>
        <SalesView />
      </swiper-slide>
    </swiper-container>
  </div>
  <div class="containedBubbles">
    <!-- Changes of the bubble number only works in concert with changing the css bubble number as well -->
    <div class="bubble" v-for="n in 50"></div>
    <AboutView />
    <ContactView />
  </div>
  <div v-if="isMobileDevice && !isLandscape" class="turn-your-phone">
    <p>Please rotate your device for a better viewing 😉</p>
  </div>
</template>

<style scoped lang="scss">
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
    animation: move + #{$i} infinite calcRandomValueBetween(3, 15, s);
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
.turn-your-phone {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  font-size: 30px;
}
</style>
