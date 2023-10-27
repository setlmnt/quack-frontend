<template>
  <div class="bg-white h-screen pt-4">
    <HeaderHome class="" />
    <section class="bg-white w-full pb-28 pt-28 relative">
  <div class="w-11/12 h-screen mx-auto">

    <button class="h-36 w-36 fixed left-32 bottom-94" @click="openModal">
        <div class="h-full w-full bg-verde border-4 border-black rounded-3xl p-8 px-12 flex items-center justify-center">
          <img class="" src="../assets/img/plus.png" alt="">
        </div>
      </button>
    <div class="w-4/6 h-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">

      <!-- Iterate over collections and display them -->
      <div v-for="(collection, index) in collections" :key="index" class="col-span-1 h-96">
        <div @click="redirect(collection.slug)" class="h-full rounded-3xl p-8 px-12 overflow-hidden cursor-pointer hover:border-8 border-inherit border-dashed border-amber-500" :class="getCollectionClass()">
          <!-- Display collection information here -->
          <h2 class=" font-modak text-branco text-7xl">{{ collection.name }}</h2>
          <p class="text-branco font-montserrat text-3xl">{{ collection.bio }}</p>
          <!-- You can add more details as needed -->
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg md:p-4 w-11/12 md:w-1/2 shadow-md relative z-50">
        <button @click="closeModal" class="bg-laranja text-white px-4 py-2 mt-4 rounded-md font-montserrat">
          Cancelar
        </button>
        <form @submit.prevent="submitForm" class="bg-white rounded-3xl w-full md:w-3/4 p-8 mx-auto" action=""
          method="post">
          <h1 class="font-modak text-4xl">NOVA COLEÇÃO</h1>
          <h2 class="font-montserrat text-xl mb-10">Crie uma nova coleção de links</h2>
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="name">Titulo</label>
              <input v-model="collectionData.name" class="rounded-xl p-2 bg-branco h-14" type="text" name="name" id="title">
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="description">Descrição</label>
              <textarea v-model="collectionData.bio" rows="4" class="rounded-xl p-2 bg-branco h-40" type="text" name="bio"
                id="description"> </textarea>
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="visibility">Visibilidade</label>
              <select v-model="collectionData.visibility" class="rounded-xl p-2 bg-branco h-14" name="visibility"
                id="visibility">
                <option value="PUBLIC">Listada</option>
                <option value="PRIVATE">Não Listada</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col items-center">
            <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-white text-4xl"
              type="submit">Criar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      colorClasses: ['verde', 'laranja', 'azul', 'roxo'],
      isModalOpen: false,
      collectionData: {
        name: '',
        bio: '',
        visibility: 'PUBLIC',
      },
      collections: [],
      currentIndex: 0,
    };
  },
  methods: {
    redirect(slug) {
      this.$router.push(`/${slug}`);
    },
    getCollectionClass() {
      const currentIndex = this.currentIndex++;
      const colorIndex = currentIndex % this.colorClasses.length;
      const colorClass = this.colorClasses[colorIndex];
      return `bg-${colorClass}`;
    },
    async openModal() {
      // Call the getCollections method when opening the modal
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitForm() {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.post(
          'https://quack-8xw2.onrender.com/api/v1/collections',
          this.collectionData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Handle success, e.g., show a success message, redirect, etc.
        console.log('Success:', response.data);

        // Close the modal after form submission and refresh the collections
        this.isModalOpen = false;
        await this.getCollections();
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error:', error);
      }
    },
    async getCollections() {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');

      try {
        const response = await axios.get(
          `https://quack-8xw2.onrender.com/api/v1/collections/users/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Update the collections array with the received data
        this.collections = response.data.content;

        console.log('Collections:', this.collections);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    },
  },
  created() {
    // Chame o método getCollections quando o componente for criado
    this.getCollections();
  },
};
</script>

