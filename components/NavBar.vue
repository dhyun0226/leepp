<script setup>
import { useColorMode } from '@vueuse/core'
import { ref } from 'vue'

const isOpen = ref(false)
const colorMode = useColorMode()

// 토글 핸들러
function toggleTheme() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <!-- 로고 -->
      <NuxtLink to="/" class="text-xl font-bold text-purple-600">LeePP</NuxtLink>

      <!-- 데스크탑 메뉴 -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="text-gray-700 dark:text-gray-200 hover:text-purple-600">블로그</NuxtLink>
        <NuxtLink to="/cisa" class="text-gray-700 dark:text-gray-200 hover:text-purple-600">CISA 문제풀이</NuxtLink>
        <NuxtLink to="/coin" class="text-gray-700 dark:text-gray-200 hover:text-purple-600">코인현황</NuxtLink>

        <!-- 다크모드 버튼 -->
        <button @click="toggleTheme" class="ml-4 text-gray-700 dark:text-gray-200 hover:text-purple-600">
          <Icon :name="colorMode.value === 'dark' ? 'heroicons:moon' : 'heroicons:sun'" class="w-5 h-5" />
        </button>
      </nav>

      <!-- 모바일 햄버거 -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 dark:text-gray-200">
        <Icon name="heroicons:bars-3" class="w-6 h-6" />
      </button>
    </div>

    <!-- 모바일 메뉴 -->
    <div v-if="isOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 space-y-2">
      <NuxtLink to="/" class="block text-gray-700 dark:text-gray-200 hover:text-purple-600">블로그</NuxtLink>
      <NuxtLink to="/cisa" class="block text-gray-700 dark:text-gray-200 hover:text-purple-600">CISA 문제풀이</NuxtLink>
      <NuxtLink to="/coin" class="block text-gray-700 dark:text-gray-200 hover:text-purple-600">코인현황</NuxtLink>

      <!-- 모바일에서도 다크모드 버튼 -->
      <button @click="toggleTheme" class="block text-gray-700 dark:text-gray-200 hover:text-purple-600">
        <Icon :name="colorMode.value === 'dark' ? 'heroicons:moon' : 'heroicons:sun'" class="w-5 h-5" />
        <span class="ml-2">{{ colorMode.value === 'dark' ? '다크모드' : '라이트모드' }}</span>
      </button>
    </div>
  </header>
</template>
