<template>
    <div class="bg-verde pt-4">
        <Header />
        <section class="flex mt-16 mx-auto w-11/12 justify-between">
            <div class="w-1/2 my-auto ml-20">
                <h1 class="font-modak text-7xl mb-8 text-branco">Você por inteiro. Em um único link na bio.</h1>
                <p class="font-montserrat text-xl mb-8 text-branco font-medium">Facilite o acesso ao seu conteúdo se
                    juntando ao
                    quack! Um clique na sua bio e mostre tudo o que você deseja ao mundo no X, Instagram, Youtube e muitas
                    outras midias sociais.</p>
                <button class="p-4 px-8 mx-10 rounded-2xl font-modak bg-azul text-branco text-6xl font-normal">comece
                    agora</button>
            </div>
            <div class="w-1/2">
                <img src="../assets/img/colecao.png" alt="Imagem de um celular com o site do quack aberto" class="">
            </div>
        </section>
        <section class="bg-branco w-full pb-28 pt-28">
            <div class="w-11/12 h-full mx-auto ">
                <div class="w-4/6 h-4/6 mx-auto grid grid-cols-3 grid-rows-2 gap-2">

                    <div class="col-span-1 row-span-1 flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front bg-verde rounded-3xl p-8 px-12">
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">crie</h1>
                                <p class="font-montserrat text-xl mb-8 text-branco font-medium">Forneça aos seus seguidores
                                    todas as
                                    informações que eles precisam sobre você a qualquer momento.</p>
                            </div>
                            <div class="flip-card-back bg-azul rounded-3xl p-8 px-12">
                                <!-- Conteúdo da face traseira com um botão -->
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">Botão na face traseira</h1>
                                <button
                                    class="rounded-2xl bg-verde font-modak text-5xl p-2 px-8 text-branco transform-gpu origin-right focus:outline-none transition-transform duration-300 ease-in-out focus:scale-110 focus:rotate-12">Clique</button>
                            </div>
                        </div>
                    </div>

                    <!-- Elemento 2 -->
                    <div class="col-span-1 row-span-1 flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front bg-laranja rounded-3xl p-8 px-12">
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">Compartilhe</h1>
                                <p class="font-montserrat text-xl mb-8 text-branco font-medium">Basta um clique e todos
                                    saberão
                                    o que você tem para mostrar!</p>
                            </div>
                            <div class="flip-card-back bg-roxo rounded-3xl p-8 px-12">
                                <!-- Conteúdo da face traseira com um botão -->
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">Botão na face traseira</h1>
                                <button
                                    class="rounded-2xl bg-laranja font-modak text-5xl p-2 px-8 text-branco transform-gpu origin-right focus:outline-none transition-transform duration-300 ease-in-out focus:scale-110 focus:rotate-12">Clique</button>
                            </div>
                        </div>
                    </div>


                    <!-- Elemento 3 -->
                    <div class="col-span-1 row-span-2 flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front bg-azul rounded-3xl p-8 px-12">
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">Cresça!</h1>
                                <p class="font-montserrat text-xl mb-8 text-branco font-medium">Analise e entenda o seu
                                    crescimento online e compreenda melhor o seu público.</p>
                                <img src="../assets/img/arrow.svg" alt="" class="h-1/2 mx-auto">
                            </div>
                            <div class="flip-card-back bg-verde rounded-3xl p-8 px-12">
                                <!-- Conteúdo da face traseira com um botão -->
                                <h1 class="text-branco font-modak text-5xl text-center mb-4">Botão na face traseira</h1>
                                <button
                                    class="rounded-2xl bg-azul font-modak text-5xl p-2 px-8 text-branco transform-gpu origin-right focus:outline-none transition-transform duration-300 ease-in-out focus:scale-110 focus:rotate-12">Clique</button>
                            </div>
                        </div>
                    </div>


                    <!-- Elemento 4 -->
                    <div class="col-span-2 row-span-1 bg-roxo rounded-3xl p-8 px-12 flip-card">
                        <div class="flip-card-inner">
                            <h1 class="text-branco font-modak text-5xl mb-4">Customize</h1>
                            <p class="font-montserrat text-xl mb-4 text-branco font-medium">Dê um quack rapidinho,
                                customizando e organizando todos os seus links e informações com muito estilo e
                                personalidade.
                            </p>
                            <img src="../assets/img/cardClick.png" alt="" class="w-8/12 mx-auto">
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="w-full h-96 bg-azul pt-16">
            <h1 class="w-1/2 mx-auto font-modak text-8xl mb-8 text-branco text-center">Facilite sua carreira virtual hoje!
            </h1>
            <form action="" class="w-1/3 mx-auto flex justfy-center">
                <input class="h-16 w-full rounded-2xl mr-4 p-4" type="text" value="www.quack.com/">
                <button
                    class="rounded-2xl bg-verde font-modak text-5xl p-2 px-8 text-branco transform-gpu origin-right focus:outline-none transition-transform duration-300 ease-in-out focus:scale-110 focus:rotate-12"
                    @click="playAudio" type="submit">Quack!</button>
            </form>
        </section>
        <Footer />
    </div>
</template>


<style scoped>
.flip-card {
    perspective: 1000px;
    width: 100%;
    height: 100%;
}

.flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>

<script>
export default {
    methods: {
        playAudio() {
            const audio = new Audio('../assets/audio/quack.mp3');
            audio.play();
        },
    },
};
</script>