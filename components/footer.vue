<template>
    <footer class="bg-branco py-8 relative overflow-hidden">
      <div class="w-11/12 h-52 mx-auto flex justify-between items-center my-auto px-8 rounded-full bg-roxo relative">
        <h1 class="font-modak text-9xl absolute left-0 right-0 transition-transform duration-500 animation-slide-infinite">Quack</h1>
      </div>
    </footer>
  </template>
  
  <style scoped>
  @keyframes slide {
      0%, 100% {
          transform: translateX(3%);
          color: #D9D9D9 /* Defina a cor inicial aqui */
      }
      50% {
          transform: translateX(75%);
          color: #FFD900; /* Defina a cor da etapa 2 aqui */
      }
  }
  .animation-slide-infinite {
      animation: slide 5s infinite;
  }
  </style>
  