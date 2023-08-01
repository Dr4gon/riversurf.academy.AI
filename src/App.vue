<script setup>
// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
register();

import Swiper from 'swiper';

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
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/welcome">Welcome</RouterLink>
        <RouterLink to="/convincer">Convincer</RouterLink>
        <RouterLink to="/sales">Sales</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

<swiper-container class="swiper">
  <swiper-slide><RouterView/></swiper-slide>
  <swiper-slide><img src="@/assets/SURFNSMILE.jpg" alt="Logo Surf'n'Smile"></swiper-slide>
  <swiper-slide><img src="@/assets/logo.svg" alt="Logo Surf'n'Smile"></swiper-slide>
</swiper-container>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

img{
  height: 80vh;
}
</style>
