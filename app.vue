<script setup>
import NavBar from '@/components/NavBar.vue'
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
    }
  ]
})
</script>

<template>
  <UApp class="font-sans">
    <NavBar />
    <NuxtPage />
  </UApp>
</template>
