<template>
    <div class="bg-white">
      <!-- Conteúdo da página de slug -->
      <h1>{{ collectionName }}</h1>
      <p>{{ collectionDescription }}</p>
      <!-- Adicione o conteúdo que desejar para a página de slug -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        collectionName: '',
        collectionDescription: '',
      };
    },
    created() {
      // Obtenha o slug da rota atual
      const slug = this.$route.params.slug;
  
      // Faça uma chamada à API para obter os detalhes da coleção com base no slug
      axios.get(`https://quack-8xw2.onrender.com/api/v1/collections/${slug}`)
        .then((response) => {
          // Defina os detalhes da coleção com base na resposta da API
          this.collectionName = response.data.name;
          this.collectionDescription = response.data.bio;
        })
        .catch((error) => {
          console.error('Erro ao obter os detalhes da coleção:', error);
        });
    },
  };
  </script>
  