<template>
    <LoadingScreen v-if="cargando"></LoadingScreen>
    <div class="content">
        <div class="logo">
            <img src="@/assets/timetravel.png" class="logo-img" alt="logo">
        </div>
        <div class="main">
            <div class="text">
                <p class="text-1">¡Bienvenido/a a Time Travel!</p>
                <p class="text-2">En este juego tu objetivo es adivinar el año de una fotografía
                    aleatoria. Mientras más cerca esté tu respuesta de la respuesta correcta, más puntos obtendrás.
                    ¿Sencillo, verdad? 😜</p>
                <p class="text-3">¡Prueba tu conocimiento e intuición ahora!</p>
            </div>
            <div class="btn">
                <Button @click="IniciarJuego()">¡JUGAR!</Button>
            </div>
        </div>
        <div class="extra">
            <div>
                <p class="extra-text">Hecho con Vue.js 3, por Bosch Facundo.</p>
            </div>
            <div class="extra-container">
                <a class="extra-logo-container"
                    href="https://drive.google.com/drive/folders/1fesyfk8hDx5-9OfXDMzY5UiI1IghTI0M?usp=sharing"
                    target="_blank">
                    <img src="@/assets/gdrive-logo.png" class="extra-logo" alt="Drive"
                        title="Ir a mi portfolio de Drive">
                </a>
                <a class="extra-logo-container" href="https://github.com/FacundoBosch" target="_blank">
                    <img src="@/assets/github-logo.png" class="extra-logo" alt="Drive" title="Ir a mi perfil de Github">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { useRouter } from 'vue-router';
import { useCurrentStore } from '@/stores/CurrentStore';
import { ref } from 'vue';

const router = useRouter();
const currentStore = useCurrentStore();

const cargando = ref(false);

async function IniciarJuego() {
    cargando.value = true;
    const juego = await currentStore.EstablecerJuego();
    router.push(`/play/1`);
}
</script>

<style scoped>
.content {
    width: 50%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

/* TERMINA EL BACKGROUND */
/* COMIENZA EL LOGO SUPERIOR */
.logo {
    flex: 0.5;
    width: 80%;
    min-height: 0;
    height: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-img {
    width: 50%;
    height: 100%;

    object-fit: fill;
    display: block;
}

/* TERMINA EL LOGO SUPERIOR */
/* COMIENZA LA SECCIÓN CENTRAL */
.main {
    flex: 1;

    width: 100%;
    min-height: 0;
    height: 0;

    padding: 2rem;
    padding-top: 0;
    box-sizing: border-box;
    border-top: 2px black solid;
    border-bottom: 2px black solid;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

.text {
    height: 16rem;
    width: 85%;

    font-size: large;
    color: black;
    text-align: center;
}

.text-1 {
    font-size: 2.35rem;
    text-align: center;
}

.text-3 {
    font-size: larger;
    text-align: center;
}

.btn {
    height: 6rem;
    width: 18rem;
}

/* TERMINA LA SECCIÓN CENTRAL */
/* COMIENZA LA SECCIÓN INFERIOR */
.extra {
    flex: 0.15;
    width: 100%;
    height: 100%;

    padding: 0.5rem 2.5rem;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: large;
}

.extra-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.extra-logo-container {
    width: 3rem;
    height: 3rem;
    margin: 0 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
}

.extra-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1000px) {
    .content {
        width: 80%;
    }

    .logo-img {
        width: 50%;
    }
}

@media (max-width: 769px) {
    .logo-img {
        width: 70%;
    }

    .main {
        display: flex;
    }

    .text {
        flex: 0.8;
    }

    .btn {
        flex: 0.2;
    }
}

@media (max-width: 550px) {
    .logo-img {
        width: 100%;
    }
}

@media (max-width: 475px) {
    .text>* {
        font-size: large;
    }

    .text-2 {
        font-size: medium;
    }

    .extra-text {
        font-size: medium;
    }
}

@media (max-width: 376px) {
    .content {
        width: 95%;
    }
}
</style>