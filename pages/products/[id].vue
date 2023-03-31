<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "products" });

const { id } = useRoute().params;

const { data: product }: { data: any } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id as string },
);
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
