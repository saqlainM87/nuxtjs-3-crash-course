<template>
  <div class="container">
    <h1>Product Details For {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "products" });

const { id } = useRoute().params;
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
