<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <header>
    <div class="wrapper">
      <HelloWorld message="거 'book'" />
      <nav>
        <RouterLink class="RouterLink" to="/">페이지 소개</RouterLink> |
        <RouterLink class="RouterLink" to="/about">바다 거북</RouterLink> |
        <RouterLink class="RouterLink" to="/">육지 거북</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style scoped>
.RouterLink {
  color: #000;
  text-decoration-line: none;
}
</style>
