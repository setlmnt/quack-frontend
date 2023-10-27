<template>
  <div class="md:flex">
    <img class="md:w-1/2 md:h-screen invisible md:visible" src="../assets/img/log-in.png" alt="">
    <div class="bg-verde md:w-1/2 md:h-screen flex items-center">
      <form class="bg-branco rounded-3xl w-3/4 p-8 mx-auto" @submit.prevent="login">
        <h1 class="font-modak text-4xl">LOG-IN</h1>
        <h2 class="font-montserrat text-xl mb-10">Bem vindo de volta</h2>
        <div class="flex flex-col items-center w-full">
          <div class="flex flex-col w-3/4 mb-8">
            <label class="font-montserrat text-xl mb-2 font-black" for="username">Nome de Usuário</label>
            <input class="rounded-xl p-2 bg-cinza h-14" type="text" v-model="userData.username" name="username" id="username" required>
          </div>
          <div class="flex flex-col w-3/4 mb-8">
            <label class="font-montserrat text-xl mb-2 font-black" for="password">Senha</label>
            <input class="rounded-xl p-2 bg-cinza h-14" type="password" v-model="userData.password" name="password" id="password" required>
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
          <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-branco text-4xl" type="submit">SEGUIR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
  try {
    const response = await axios.post('https://quack-8xw2.onrender.com/api/v1/auth/login', this.userData);

    if (response.status === 200 ) {
      // Armazene o token no localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', this.userData.username);

      // Redirecione para a página de sucesso ou qualquer outra página desejada
      this.$router.push('/home'); // Certifique-se de que você tenha configurado o Vue Router corretamente
    }
  } catch (error) {
    // Lidar com erros de rede ou erros de autenticação
    console.error(error);
  }
}
  }
}
</script>
