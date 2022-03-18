import { configDefaults, defineConfig } from 'vitest/config'
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
  plugins: [vue()]
})