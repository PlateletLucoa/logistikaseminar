import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    'v-gsap-nuxt',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  fonts: {
    families: [
      { name: 'Ronzino', provider: 'local' },
      { name: 'Ronzino Oblique', provider: 'local' }
    ]
  },
  colorMode: {
    classSuffix: '',
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})