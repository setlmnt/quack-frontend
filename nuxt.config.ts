export default {
  build: {
    target: 'static',
  },
  buildModules: ['@nuxtjs/pinia'],
  pinia: {
    strict: true,
  },
  modules: ['@nuxtjs/google-fonts'],
  router: {
    middleware: 'authenticated',
  },
  routes: [
    {
      name: 'login',
      path: '/login',
      component: '~/pages/login.vue'
    },
    {
      name: 'signup',
      path: '/signup',
      component: '~/pages/signup.vue'
    },
    {
      name: 'home',
      path: '/home',
      component: '~/pages/home.vue',
      meta: { requiresAuth: true } // Adicione a meta para proteger a rota
    }
  ],
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
    }
  }
}
