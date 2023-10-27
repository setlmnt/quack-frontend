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
            <div @click="redirect(collection.slug)" class="h-full rounded-3xl py-12 px-12 overflow-hidden cursor-pointer hover:border-8 border-inherit border-dashed border-amber-500" :class="getCollectionClass()">
              <!-- Display collection information here -->
              <h2 class="h-1/3 whitespace-pre-wrap truncate font-modak text-branco text-5xl mb-4">{{ collection.name }}</h2>
              <p class="h-1/2  whitespace-normal truncate text-branco font-montserrat text-xl">{{ collection.bio }}</p>
            </div>
            <button @click="openEditModal(index)" class="w-1/3 mr-4 mb-4 bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Editar</button>
            <button @click="openAddLinkModal(collection.slug)" class="w-1/2 mb-4 bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Adicionar Link</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal de Criação de Coleção -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg md:p-4 w-11/12 md:w-1/2 shadow-md relative z-50">
        <button @click="closeModal" class="bg-laranja text-white px-4 py-2 mt-4 rounded-md font-montserrat">
          Cancelar
        </button>
        <form @submit.prevent="submitForm" class="bg-white rounded-3xl w-full md:w-3/4 p-8 mx-auto" action="" method="post">
          <h1 class="font-modak text-4xl">NOVA COLEÇÃO</h1>
          <h2 class="font-montserrat text-xl mb-10">Crie uma nova coleção de links</h2>
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="name">Titulo</label>
              <input v-model="collectionData.name" class="rounded-xl p-2 bg-branco h-14" type="text" name="name" id="title">
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="description">Descrição</label>
              <textarea v-model="collectionData.bio" rows="4" class="rounded-xl p-2 bg-branco h-40" type="text" name="bio" id="description"></textarea>
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" >Visibilidade</label>
              <select v-model="collectionData.visibility" class="rounded-xl p-2 bg-branco h-14" name="visibility" id="visibility">
                <option value="PUBLIC">Listada</option>
                <option value="PRIVATE">Não Listada</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col items-center">
            <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-white text-4xl" type="submit">Criar</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal de Edição de Coleção -->
    <div v-if="isEditModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg md:p-4 w-11/12 md:w-1/2 shadow-md relative z-50">
        <button @click="closeEditModal" class="bg-laranja text-white px-4 py-2 mt-4 rounded-md font-montserrat">
          Cancelar
        </button>
        <form @submit.prevent="submitEditForm" class="bg-white rounded-3xl w-full md:w-3/4 p-8 mx-auto" action="" method="post">
          <h1 class="font-modak text-4xl">EDITAR COLEÇÃO</h1>
          <h2 class="font-montserrat text-xl mb-10">Atualize sua coleção de links</h2>
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="editName">Titulo</label>
              <input v-model="editedCollectionData.name" class="rounded-xl p-2 bg-branco h-14" type="text" name="editName" id="editName">
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="editBio">Descrição</label>
              <textarea v-model="editedCollectionData.bio" rows="4" class="rounded-xl p-2 bg-branco h-40" type="text" name="editBio" id="editBio"></textarea>
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="editVisibility">Visibilidade</label>
              <select v-model="editedCollectionData.visibility" class="rounded-xl p-2 bg-branco h-14" name="editVisibility" id="editVisibility">
                <option value="PUBLIC">Listada</option>
                <option value="PRIVATE">Não Listada</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col items-center">
            <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-white text-4xl" type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal de Adição de Link à Coleção -->
    <div v-if="isAddLinkModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg md:p-4 w-11/12 md:w-1/2 shadow-md relative z-50">
        <button @click="closeAddLinkModal" class="bg-laranja text-white px-4 py-2 mt-4 rounded-md font-montserrat">
          Cancelar
        </button>
        <form @submit.prevent="submitAddLinkForm" class="bg-white rounded-3xl w-full md:w-3/4 p-8 mx-auto" action="" method="post">
          <h1 class="font-modak text-4xl">ADICIONAR LINK</h1>
          <h2 class="font-montserrat text-xl mb-10">Adicione um novo link à coleção</h2>
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="linkName">Nome</label>
              <input v-model="linkData.name" class="rounded-xl p-2 bg-branco h-14" type="text" name="linkName" id="linkName">
            </div>
            <div class="flex flex-col w-11/12 md:w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="linkUrl">URL do Link</label>
              <input v-model="linkData.url" class="rounded-xl p-2 bg-branco h-14" type="text" name="linkUrl" id="linkUrl">
            </div>
          </div>
          <div class="w-full flex flex-col items-center">
            <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-white text-4xl" type="submit">Adicionar</button>
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
      isEditModalOpen: false,
      isAddLinkModalOpen: false,
      collectionData: {
        name: '',
        bio: '',
        visibility: 'PUBLIC',
      },
      editedCollectionData: {
        name: '',
        bio: '',
        visibility: 'PUBLIC',
      },
      linkData: {
        name: '',
        url: '',
      },
      collections: [],
      currentIndex: 0,
      selectedCollectionIndex: -1,
      selectedCollectionSlug: '',
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

        console.log('Success:', response.data);

        this.isModalOpen = false;
        await this.getCollections();
      } catch (error) {
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

        this.collections = response.data.content;

        console.log('Collections:', this.collections);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    },
    openEditModal(index) {
      this.selectedCollectionIndex = index;
      this.editedCollectionData = { ...this.collections[index] };
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    async submitEditForm() {
      const token = localStorage.getItem('token');

      try {
        const collectionId = this.collections[this.selectedCollectionIndex].id;
        const response = await axios.put(
          `https://quack-8xw2.onrender.com/api/v1/collections/${collectionId}`,
          this.editedCollectionData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Success:', response.data);

        this.isEditModalOpen = false;
        await this.getCollections();
      } catch (error) {
        console.error('Error:', error);
      }
    },
    openAddLinkModal(slug) {
      this.selectedCollectionSlug = slug;
      this.isAddLinkModalOpen = true;
    },
    closeAddLinkModal() {
      this.isAddLinkModalOpen = false;
    },
    async submitAddLinkForm() {
      const token = localStorage.getItem('token');
      const slug = this.selectedCollectionSlug;

      try {
        const response = await axios.post(
          `https://quack-8xw2.onrender.com/api/v1/collections/${slug}/links`,
          this.linkData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Success:', response.data);

        this.isAddLinkModalOpen = false;
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
  created() {
    this.getCollections();
  },
};
</script>
