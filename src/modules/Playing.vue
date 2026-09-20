<template>
    <MainMenuButton></MainMenuButton>
    <Result :current="props.current" v-if="currentStore.resultFlag"></Result>
    <div class="content">
        <div class="image-container">
            <img :src="getImage.url" alt="Image" class="image">
        </div>
        <div class="slider">
            <div class="slider-container">
                <div class="actual-slider">
                    <input type="range" min="1800" max="2026" class="input-slider" v-model="añoInput">
                </div>
                <div class="text">
                    <p>{{ añoInput }}</p>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <div class="actual-btn">
                <Button @click="adivinar()">ADIVINAR</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainMenuButton from '@/components/MainMenuButton.vue';
import Result from '@/components/Result.vue';
import Button from '@/components/Button.vue';
import data from '@/assets/gameData.json';

import { ref, computed } from 'vue';
import { usePuntuaciónStore } from '@/stores/PuntuacionStore';
import { useCurrentStore } from '@/stores/CurrentStore';

const props = defineProps({
    current: String,
})

/* LÓGICA DE IMAGENES */
const currentStore = useCurrentStore();
const getImage = computed(() => {
    return data.images[currentStore.juego[props.current - 1]];
})
/* FIN LÓGICA DE IMAGENES */

/* LÓGICA DEL JUEGO */
const puntuacionStore = usePuntuaciónStore();
const añoInput = ref(1800);

function adivinar() {
    var diferencia = Math.abs(getImage.value.año - añoInput.value);
    puntuacionStore.descontar(diferencia);
    currentStore.resultFlag = true;
}
/* FIN LÓGICA DEL JUEGO */

</script>

<style scoped>
.content {
    width: 50%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* comienza sección imagen */
.image-container {
    flex: 0.7;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 15px 5px rgba(31, 30, 30, 0.8);
    clip-path: inset(0px -15px 0px -15px);
    width: 90%;
    height: 100%;
    min-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.image {
    max-width: 95%;
    max-height: 95%;
    width: 95%;
    height: 95%;

    object-fit: cover;
    display: block;
}

/* termina sección imagen */
/* comienza sección slider */
.slider {
    flex: 0.15;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-container {
    width: 80%;
    height: 85%;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.8);
    border-radius: 25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
}

.actual-slider {
    flex: 0.85;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
}

.input-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 90%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 25px;
}

.input-slider:hover {
    opacity: 1;
}

.input-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 40px;
    background: #08A045;
    cursor: pointer;
}

.text {
    flex: 0.15;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: x-large;
    color: #d3d3d3;
}

/* termina sección slider */
.btn-container {
    flex: 0.15;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.actual-btn {
    width: 50%;
    height: 80%;
}

@media (max-width: 769px) {
    .content {
        width: 75%;
    }
}

@media (max-width: 560px) {
    .content {
        width: 95%;
    }
}
</style>