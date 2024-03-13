import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'node:path'

// @see https://unocss.dev/integrations/vite
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    solid(), 
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
