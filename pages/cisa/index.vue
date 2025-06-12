<script setup lang="ts">
interface Question {
  id: string
  domain: string
  difficulty: string
  question: string
  choices: Record<string, string>
  answer: string
  explanation: string
}

const { data } = await useFetch<Question[]>('/api/cisa')

const questions = ref(
  (data.value || []).map((q) => ({
    ...q,
    userAnswer: '',
    showAnswer: false,
    isCorrect: false
  }))
)

function checkAnswer(q: any) {
  q.showAnswer = true
  q.isCorrect = q.userAnswer === q.answer
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-4 space-y-8">
    <div
      v-for="(q, index) in questions"
      :key="q.id"
      class="border rounded-md p-4"
    >
      <h2 class="font-semibold mb-2 whitespace-pre-line">
        {{ index + 1 }}. {{ q.question }}
      </h2>
      <div class="space-y-1">
        <label
          v-for="(choice, key) in q.choices"
          :key="key"
          class="block"
        >
          <input
            type="radio"
            :name="q.id"
            :value="key"
            v-model="q.userAnswer"
            class="mr-2"
          />
          {{ key.toUpperCase() }}. {{ choice }}
        </label>
      </div>
      <button
        class="mt-3 px-3 py-1 bg-purple-600 text-white rounded"
        @click="checkAnswer(q)"
      >
        정답 확인
      </button>
      <div v-if="q.showAnswer" class="mt-2">
        <p :class="q.isCorrect ? 'text-green-600' : 'text-red-600'">
          {{ q.isCorrect ? '정답입니다!' : '오답입니다.' }}
        </p>
        <p class="text-gray-700 text-sm">
          정답: {{ q.answer.toUpperCase() }}. {{ q.choices[q.answer] }}
        </p>
        <p class="text-gray-500 text-sm mt-1">{{ q.explanation }}</p>
      </div>
    </div>
  </div>
</template>
