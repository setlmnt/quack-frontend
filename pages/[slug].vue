<template>
  <div class="w-1/3 p-8  rounded-3xl mx-auto bg-azul flex items-center justify-center mt-12">
    <h1 class="font-modak text-branco text-5xl text-center">{{ name }}</h1>
  </div>
  <div class="w-1/3 p-8  rounded-3xl mx-auto bg-branco flex items-center justify-center mt-12">
    <p class="font-montserrat text-black text-xl">{{ bio }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: null,
      bio: null,
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
          // Verifica se a resposta contém os campos "name" e "bio"
          if (response.data && response.data.name && response.data.bio) {
            this.name = response.data.name;
            this.bio = response.data.bio;
          } else {
            console.error('Campos "name" e/ou "bio" não encontrados na resposta da API.');
          }
        } else {
          console.error('Slug não encontrado na rota.');
        }
      } catch (error) {
        console.error('Erro ao buscar a coleção:', error);
      }
    },
  },
};
</script>
