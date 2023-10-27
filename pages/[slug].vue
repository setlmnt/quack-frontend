<template>
  <div>
    <div class="w-11/12 md:w-1/3 p-8 rounded-3xl mx-auto bg-azul flex items-center justify-center mt-12">
      <h1 class="font-modak text-branco text-5xl text-center">{{ name }}</h1>
    </div>
    <div class="w-11/12 md:w-1/3 p-8 rounded-3xl mx-auto bg-laranja flex items-center mt-4 mb-20">
      <p class="font-montserrat text-branco text-2xl">{{ bio }}</p>
    </div>
    <div v-for="link in links" :key="link.id" @click="openLink(link.url)" class="w-11/12 md:w-1/3 p-8 rounded-3xl mx-auto bg-branco flex items-center justify-center mt-12 cursor-pointer link-item">
      <h2 class="font-montserrat text-black text-xl">{{ link.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: null,
      bio: null,
      links: [],
    };
  },
  created() {
    this.fetchCollection();
  },
  methods: {
    async fetchCollection() {
      try {
        const slug = this.$route.params.slug;
        if (slug) {
          const response = await axios.get(`https://quack-8xw2.onrender.com/api/v1/collections/${slug}`);
          if (response.data && response.data.name && response.data.bio) {
            this.name = response.data.name;
            this.bio = response.data.bio;
          } else {
            console.error('Campos "name" e/ou "bio" não encontrados na resposta da API.');
          }

          // Buscar os links da API
          const linksResponse = await axios.get(`https://quack-8xw2.onrender.com/api/v1/collections/${slug}/links`);
          if (Array.isArray(linksResponse.data.content)) {
            this.links = linksResponse.data.content;
          } else {
            console.error('Erro ao buscar a lista de links.');
          }
        } else {
          console.error('Slug não encontrado na rota.');
        }
      } catch (error) {
        console.error('Erro ao buscar a coleção:', error);
      }
    },
    openLink(url) {
      if (url) {
        // Abre a URL em uma nova aba
        window.open(url, '_blank');
      }
    },
  },
};
</script>

<style scoped>
.link-item {
  transition: transform 0.2s ease-in-out;
}

.link-item:hover {
  box-shadow: 0 12px 0px #025DB7;
  transform: translateY(-4px);
}
</style>
