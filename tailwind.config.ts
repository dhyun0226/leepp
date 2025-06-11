// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'] // ✅ 이거 꼭 있어야 함
            }
        }
    },
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue'
    ]
}

export default config
