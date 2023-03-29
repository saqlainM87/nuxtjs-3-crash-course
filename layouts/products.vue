<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <slot />
      </div>

      <footer>
        <ul>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </footer>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
ul {
  display: flex;
  width: 100vw;

  li {
    flex: 1;
  }
}

.router-link-exact-active {
  color: aquamarine;
}
</style>
