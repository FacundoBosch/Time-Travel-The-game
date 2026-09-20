<template>
    <div class="opacitator">
        <div class="result-container" :style="`border: 3px solid ${color};`">
            <div class="top">
                <p class="comment" :style="`color: ${color};`">{{ comment }}</p>
            </div>
            <div class="bottom">
                <div class="texts">
                    <p class="puntos">La respuesta era: {{ getAño }}</p>
                    <p class="puntos">Tu puntuación: {{ puntuacionStore.puntajeActual }}</p>
                </div>
                <div class="continue">
                    <Button @click="goToNext()">CONTINUAR</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
import { computed } from 'vue';
import { usePuntuaciónStore } from '@/stores/PuntuacionStore';
import { useCurrentStore } from '@/stores/CurrentStore';
import { useRouter } from 'vue-router';
import data from '@/assets/gameData.json';

const props = defineProps({
    current: String,
})

const currentStore = useCurrentStore();
const getAño = computed(() => {
    return data.images[currentStore.juego[props.current - 1]].año;
})

const puntuacionStore = usePuntuaciónStore();
const comment = computed(() => {
    let puntos = puntuacionStore.puntajeActual;

    if (puntos == 5000) {
        return "🎉 ¡Excepcional! 🎉";
    } else if (puntos > 4000) {
        return "¡Muy bien hecho! 😄";
    } else if (puntos > 3000) {
        return "¡Bien hecho! 😊";
    } else if (puntos > 2000) {
        return "Flojito... 😣";
    } else if (puntos > 1000) {
        return "No es tu día... 💩";
    } else if (puntos >= 0) {
        return "Matate y grabalo 💀";
    }
})
const color = computed(() => {
    let puntos = puntuacionStore.puntajeActual;
    let green = Math.round(85 + (140 / 5000) * puntos);
    return `rgb(200, ${green}, 74)`;
})

const router = useRouter();

function goToNext() {
    currentStore.resultFlag = false;
    if (props.current >= 5 || props.current <= 0) {
        router.push(`/play/results`);
    } else {
        router.push(`/play/${Number(props.current) + 1}`);
    }
}
</script>

<style scoped>
/* #DA2C38 rgb(221, 75-225, 74) rojo, #F48668 marron */
.opacitator {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 600;

    display: flex;
    justify-content: center;
}

.result-container {
    position: relative;
    top: 15%;
    z-index: 601;
    width: 35rem;
    height: 20rem;

    background-color: #3f3e3e;
    background: radial-gradient(circle, #3f3e3e 15%, #262525 84%);
    border-radius: 25px;
    padding: 2rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.top {
    flex: 0.33;
}

.comment {
    font-size: xx-large;
    font-weight: 400;
    font-family: "Bungee", sans-serif;
    font-style: normal;
}

.bottom {
    flex: 0.66;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F2F7F2;
}

.puntos {
    font-size: large;
    margin: 0;
    margin-bottom: 0.66rem;
}

.continue {
    width: 70%;
    height: 50%;
}

@media (max-width: 595px) {
    .result-container {
        width: 80%;
        height: 50%;
    }
}

@media (max-width: 426px) {
    .comment {
        font-size: x-large;
        text-align: center;
    }

    .continue {
        width: 100%;
    }
}

@media (max-width: 321px) {
    .result-container {
        padding: 1rem;
    }
}
</style>