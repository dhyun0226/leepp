import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, '../../content/cisa/cisa.json')
  const data = await readFile(filePath, 'utf-8')
  return JSON.parse(data)
})
