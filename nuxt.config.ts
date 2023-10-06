// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  routes: [
    {
      name: 'login',
      path: '/login',
      component: '~/pages/login.vue'
    },
    {
      name: 'registro',
      path: '/registro',
      component: '~/pages/registro.vue'
    }
  ],
  modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
      display: 'swap',
      families: {
        Modak: true,
        Montserrat: true,
      },
    },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}