// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui','nuxt-icon', '@element-plus/nuxt' ],
googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700, 800]  // Kerakli og'irliklar
    },
    display: 'swap',
    download: true,
    inject: true
  },
  
  css: ['./assets/css/main.css']
})