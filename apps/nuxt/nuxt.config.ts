// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  components: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  vite: {
    server: {
      fs: {
        strict: false,
        // used to allow importing from outside of the root directory
      },
    },
  },
});
