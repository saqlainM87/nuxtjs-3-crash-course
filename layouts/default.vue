<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/" class="font-bold">Home</NuxtLink>
          </li>
        </ul>

        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: aquamarine;
}
</style>
