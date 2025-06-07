// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    mongoUri: process.env.MONGO_URI,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleRedirectUrl: process.env.GOOGLE_REDIRECT_URI,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/test-utils",
  ],
});
