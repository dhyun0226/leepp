// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint'
  ],
  ui: {
    icons: ['heroicons']
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    contentHead: false,
    highlight: {
      theme: "github-dark",
    },
  },
  css: [
    'pretendard/dist/web/static/pretendard.css',
    '~/assets/css/main.css'
  ]
})