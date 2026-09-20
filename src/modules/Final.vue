<template>
    <MainMenuButton></MainMenuButton>
    <div class="final-container" :style="`border: 5px solid ${color}`">
        <span class="msg-puntos" :style="`color: ${color}`">Puntuación final: {{ puntos }}</span>
        <span>{{ mensaje }}</span>
    </div>
</template>

<script setup>
import MainMenuButton from '@/components/MainMenuButton.vue';
import { usePuntuaciónStore } from '@/stores/PuntuacionStore';
import { computed } from 'vue';

const puntuacion = usePuntuaciónStore();
const puntos = puntuacion.puntajeTotal;

const mensaje = computed(() => {
    if (puntos == 25000) {
        return "Sos un crack hermano";
    } else if (puntos > 22500) {
        return "Uyy casi eu pero re bien";
    } else if (puntos > 18000) {
        return "La posta bastante bien";
    } else if (puntos > 13000) {
        return "Yyy bueno más o menos algo pegaste";
    } else if (puntos > 7000) {
        return "Na cualquier cosa tiraste, te dimos puntos por buena onda nomás";
    } else if (puntos >= 0) {
        return "Deja de joder peor imposible";
    }
})
const color = computed(() => {
    let puntos = puntuacion.puntajeTotal;
    let green = Math.round(85 + (140 / 25000) * puntos);
    return `rgb(200, ${green}, 74)`;
})
</script>

<style scoped>
.final-container {
    width: 40%;
    height: 40%;

    background-color: #3f3e3e;
    background: radial-gradient(circle, #3f3e3e 15%, #262525 84%);
    border-radius: 25px;
    padding: 2rem;
    box-sizing: border-box;
    color: #F2F7F2;
    font-size: larger;
    font-weight: 600;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.msg-puntos {
    font-size: 2.5rem;
    font-family: 'Bungee';
}

@media (max-width: 769px) {
    .final-container {
        width: 75%;
    }
}

@media (max-width: 426px) {
    .final-container {
        width: 90%;
    }

    .msg-puntos {
        font-size: 2rem;
    }
}
</style>