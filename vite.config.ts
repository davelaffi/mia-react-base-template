import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base: '/',
    plugins: [
      react(),
      // microLc(packageJson.name), //TODO: import this only if you use it on microlc env 
    ],
    build: {
      outDir: 'build'
    }
  }
})
