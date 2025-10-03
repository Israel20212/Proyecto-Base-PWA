import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANTE: Cambia 'Proyecto-Base-PWA' por el nombre de tu repositorio
  base: '/Proyecto-Base-PWA/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gestor de Tareas PWA', // El nombre completo de tu app
        short_name: 'TareasPWA',      // El nombre corto para el icono
        description: 'Un gestor de tareas simple hecho como PWA.',
        theme_color: '#007bff',        // El color para la barra de la app
        background_color: '#ffffff',  // El color para la splash screen
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})