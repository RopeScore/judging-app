import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  server: {
    port: 5001
  },
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      manifest: {
        name: 'RopeScore Judging',
        short_name: 'RSJudge',
        orientation: 'portrait',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75'
          },
          {
            src: '/icons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0'
          },
          {
            src: '/icons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5'
          },
          {
            src: '/icons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0'
          },
          {
            src: '/icons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0'
          },
          {
            src: '/icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0'
          }
        ]
      }
    })
  ]
})
