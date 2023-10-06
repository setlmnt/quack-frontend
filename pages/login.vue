<template>
    <div class="flex">
        <img class="w-1/2 h-screen" src="../assets/img/log-in.png" alt="">
        <div class="bg-verde w-1/2 h-screen flex items-center">
            <form class="bg-branco rounded-3xl w-3/4 p-8 mx-auto" action="" method="post">
                <h1 class="font-modak text-4xl">LOGIN</h1>
                <h2 class="font-montserrat text-xl mb-10">Bem vindo de volta ao Quack!</h2>
                <div class="flex flex-col items-center w-full">
                    <div class="flex flex-col w-3/4 mb-8">
                        <label class="font-montserrat text-xl mb-2 font-black" for="email">Email</label>
                        <input class="rounded-xl p-2 bg-cinza h-14" type="email" name="email" id="email">
                    </div>
                    <div class="flex flex-col w-3/4">
                        <label class="font-montserrat text-xl mb-2 font-black" for="password">Senha</label>
                        <input class="rounded-xl p-2 bg-cinza h-14" type="password" name="password" id="password">
                    </div>
                </div>
                <div class="w-full flex flex-col items-center">
                    <button class="p-2 px-8 mt-8 rounded-xl font-modak bg-laranja text-branco text-4xl " type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    </div>
</template>