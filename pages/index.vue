<script setup>

const allPosts = await queryCollection('blog')
    .order('date', 'DESC')
    .all()

function formatDate(date) {
  if (!date) return '날짜 없음'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
    <div class="p-6">
      <h1 class="text-sm text-red-600">Tailwind 테스트</h1>
      <p class="text-sm text-gray-600 mt-2">이게 보이면 Tailwind는 정상입니다.</p>
    </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <UCard
        v-for="post in allPosts"
        :key="post.path"
        class="hover:shadow-md transition"
    >
      <template #header>
        <p class="text-gray-500 text-sm mb-1">
          {{ formatDate(post.date) }}
        </p>
        <NuxtLink :to="post.path">
          <h2 class="text-lg font-semibold text-gray-900 hover:underline">
            {{ post.title }}
          </h2>
        </NuxtLink>
      </template>

      <template #default>
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ post.description || 'No description provided.' }}
        </p>
      </template>
    </UCard>
  </div>
</template>
