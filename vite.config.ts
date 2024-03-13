/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
// @see https://github.com/thetarnav/solid-devtools
import devtools from 'solid-devtools/vite'

// @see https://unocss.dev/integrations/vite
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [devtools(), solid(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    isolate: false,
    setupFiles: ['./vitest-setup.ts']
  }
})
