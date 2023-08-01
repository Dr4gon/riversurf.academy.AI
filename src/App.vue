<script setup>
import Swiper from 'swiper';

 console.log('Swiper-Slider Component initializing.');
  const newSwiper = new Swiper('.newSwiper', {
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [ 0, 0, -400 ],
        },
        next: {
          translate: [ '100%', 0, 0 ],
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

  <!-- <div class="swiper newSwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <p>Wie kannst du Riversurfen lernen?</p>
    </div>
    <div class="swiper-slide">Welche Services möchtest du buchen?</div>
    <div class="swiper-slide">Von wem wirst du mit Spaß unterstützt?</div>
    <div class="swiper-slide">Welche Riverwaves gibt's in Deutschland?</div>
    <div class="swiper-slide">Wie meldest du dich bei mir?</div>
    <div class="swiper-slide">Wem gehört die Website hier?</div>
  </div>
</div> -->


  <RouterView/>
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

/* Swiper styles for effective slide components */
.swiper {
  margin: 100px auto;
  width: 100%;
  height: 500px;
}

.swiper-slide {
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

</style>
