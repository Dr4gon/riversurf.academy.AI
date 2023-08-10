<script setup>
</script>

<template>
  <!-- Überschrift mittig ausrichten -->
  <div class="header-container">
    <h1>De Longs, 3 favorites 🤙</h1>
  </div>

  <!-- Container für die 3 Divs nebeneinander -->
  <div class="products-container">
    <div class="product"></div>
    <div class="product"></div>
    <div class="product"></div>
  </div>
</template>

<style scoped>
.header-container {
  text-align: center;
  margin-bottom: 20px; /* Abstand unterhalb der Überschrift */
}

.products-container {
  display: flex; /* Flexbox verwenden, um die Divs nebeneinander anzuzeigen */
  justify-content: space-between; /* Gleichmäßiger Abstand zwischen den Divs */
}

.product {
  flex: 1; /* Jedes Produkt nimmt den gleichen Platz ein */
  margin: 0 10px; /* Ein kleiner Abstand zwischen den Produkten */
}

/* Hier können Sie zusätzliche Styling-Einstellungen für die ProductComponent vornehmen */
</style>
