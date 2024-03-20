<template>
  <div class="main-container">
    <div class="stay">
      <WelcomeView />
    </div>
  </div>
  <div class="containedBubbles">
    <!-- Changes of the bubble number only works in concert with changing the css bubble number as well -->
    <div class="bubble" v-for="n in 50"></div>
    <AboutView />
    <ContactView />
  </div>
</template>

<script>
import WelcomeView from '@/views/WelcomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

export default {
  name: 'App',
  components: {
    WelcomeView,
    AboutView,
    ContactView,
  },
  created() {
    this.checkAndSetUUID();
  },
  methods: {
    checkAndSetUUID() {
      if (!localStorage.getItem('userIdentifier')) {
        localStorage.setItem('userIdentifier', this.generateUUID());
      }
    },
    generateUUID() {
      return self.crypto.randomUUID(); // only works via https or locally
    },
  },
};
</script>

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
    bottom: 30vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 24vh;
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

.stay {
  position: relative;
  z-index: 1;
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
</style>
