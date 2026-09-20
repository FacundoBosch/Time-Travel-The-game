<template>
    <div class="goback" @click="VolverAlMenu()">
        <div class="img">
            <img src="@/assets/timetravel.png" alt="Time Travel! Logo">
        </div>
        <div class="text">Volver a la página principal</div>
    </div>
</template>

<script setup>
import { usePuntuaciónStore } from '@/stores/PuntuacionStore';
import { useCurrentStore } from '@/stores/CurrentStore';
import { useRouter } from 'vue-router';

const puntuacionStore = usePuntuaciónStore();
const currentStore = useCurrentStore();
const router = useRouter();

function VolverAlMenu() {
    currentStore.resultFlag = false;
    puntuacionStore.reiniciar();
    router.push('/');
}
</script>

<style scoped>
/* COMIENZA EL BOTÓN DE GOBACK */
.goback {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 605;

    width: 9rem;
    height: 6rem;
    background-color: rgb(45, 44, 44);
    border-radius: 50px;
    box-shadow: 0px 0px 15px 5px rgb(31, 30, 30);
    transition: all ease-in-out 0.25s;
    padding: 0 1rem;
    box-sizing: border-box;
    overflow: hidden;
}

.goback:hover {
    width: 20rem;
    cursor: pointer;
}

.goback:hover .text {
    opacity: 1;
}

.img {
    width: 7rem;
    height: 6rem;
}

.img img {
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    left: 9rem;
    width: 11rem;
    font-weight: 700;
    color: azure;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
}

/* TERMINA EL BOTÓN DE GOBACK */
</style>