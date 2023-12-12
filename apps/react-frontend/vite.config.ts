import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import crypto from 'crypto'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const componentName = filename
          .replace(/\.\w+$/, '')
          .split('/')
          .pop()
          .split('.')
          .shift()

        // Generate hash
        const hash = crypto
          .createHash('md5')
          .update(css)
          .digest('base64')
          .substring(0, 5)

        return `${componentName}__${name}__${hash}`
      },
    },
  },
})
