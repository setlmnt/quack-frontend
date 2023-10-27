<template>
    <div class="md:flex">
      <img class="md:w-1/2 md:h-screen invisible md:visible" src="../assets/img/log-in.png" alt="">
      <div class="bg-verde md:w-1/2 md:h-screen flex items-center">
        <form class="bg-branco rounded-3xl w-3/4 p-8 mx-auto" @submit.prevent="register">
          <h1 class="font-modak text-4xl">REGISTRAR-SE</h1>
          <h2 class="font-montserrat text-xl mb-10">Bem vindo ao Quack!</h2>
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="username">Nome de Usuário</label>
              <input class="rounded-xl p-2 bg-cinza h-14" type="text" v-model="userData.username" name="username" id="username" required>
            </div>
            <div class="flex flex-col w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="email">Email</label>
              <input class="rounded-xl p-2 bg-cinza h-14" type="text" v-model="userData.email" name="email" id="email" required>
              <div v-if="!isValidEmail" class="text-red-500">O formato do email é inválido.</div>
            </div>
            <div class="flex flex-col w-3/4 mb-8">
              <label class="font-montserrat text-xl mb-2 font-black" for="password">Senha</label>
              <input class="rounded-xl p-2 bg-cinza h-14" type="password" v-model="userData.password" name="password" id="password" required>
            </div>
            <div class="flex flex-col w-3/4">
              <label class="font-montserrat text-xl mb-2 font-black" for="confirmPassword">Confirmar Senha</label>
              <input class="rounded-xl p-2 bg-cinza h-14" type="password" v-model="userData.confirmPassword" name="confirmPassword" id="confirmPassword" required>
              <div v-if="passwordsDoNotMatch" class="text-red-500">As senhas não coincidem.</div>
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
  import axios from 'axios'; // Importe a biblioteca axios
  
  export default {
    data() {
      return {
        userData: {
          username: '',
          email: '',
          password: '',
        },
        passwordsDoNotMatch: false,
        isValidEmail: true,
      };
    },
    methods: {
      async register() {
        if (this.userData.password !== this.userData.confirmPassword) {
          this.passwordsDoNotMatch = true;
          this.isValidEmail = true;
          return;
        } else {
          this.passwordsDoNotMatch = false;
        }
  
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(this.userData.email)) {
          this.isValidEmail = false;
          return;
        } else {
          this.isValidEmail = true;
        }
  
        try {
          // Envie os dados de registro para o servidor
          const response = await axios.post('https://quack-8xw2.onrender.com/api/v1/auth/signup', this.userData);
  
          // Verifique se o registro foi bem-sucedido (você pode adicionar verificação adicional aqui)
          if (response.status === 201) {
            // Redirecione para a rota "/login"
            this.$router.push('/login'); // Certifique-se de que você tenha configurado o Vue Router corretamente
          }
        } catch (error) {
          // Lidar com erros de rede ou outros erros
          console.error(error);
        }
      }
    }
  }
  </script>
  