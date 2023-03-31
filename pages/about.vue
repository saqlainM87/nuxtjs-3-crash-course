<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
      incidunt.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/test");
</script>

<style lang="scss" scoped></style>
