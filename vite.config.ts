import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'environment');
  return {
    plugins: [react()],
    resolve: {
      alias: {
        'src': fileURLToPath(new URL('./src', import.meta.url))
      },
    },

    base: process.env.NODE_ENV === 'production'
      ? env.VITE_REPO_NAME || '/'
      : '/',
    envDir: 'environment',
  }
})