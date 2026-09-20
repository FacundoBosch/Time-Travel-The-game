<template>
    <div class="background">
        <div class="texture">
            <img src="@/assets/papertexture2.jpg" class="back-texture">
        </div>
        <div class="object-container oc1" :style="{ transform: `rotate(-${anguloDeg}deg)`, width: `${hipotenusa}px` }">
            <div class="group">
                <div class="logo" v-for="n in 6" :key="n" :style="{ transform: `rotate(180deg)` }">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="Time Travel! logo">
                </div>
            </div>
            <div aria-hidden class="group">
                <div class="logo" v-for="n in 6" :key="n" :style="{ transform: `rotate(180deg)` }">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="logo">
                </div>
            </div>
        </div>
        <div class="object-container oc2" :style="{ transform: `rotate(-${anguloDeg}deg)`, width: `${hipotenusa}px` }">
            <div class="group-external">
                <div class="logo logo-external" v-for="n in 6" :key="n" :style="{ transform: `rotate(180deg)` }">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="Time Travel! logo">
                </div>
            </div>
            <div aria-hidden class="group-external">
                <div class="logo logo-external" v-for="n in 6" :key="n" :style="{ transform: `rotate(180deg)` }">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="logo">
                </div>
            </div>
        </div>
        <div class="object-container oc3" :style="{ transform: `rotate(-${anguloDeg}deg)`, width: `${hipotenusa}px` }">
            <div class="group">
                <div class="logo" v-for="n in 6" :key="n">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="Time Travel! logo">
                </div>
            </div>
            <div aria-hidden class="group">
                <div class="logo" v-for="n in 6" :key="n">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="logo">
                </div>
            </div>
        </div>
        <div class="object-container oc4" :style="{ transform: `rotate(-${anguloDeg}deg)`, width: `${hipotenusa}px` }">
            <div class="group-external">
                <div class="logo logo-external" v-for="n in 6" :key="n">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="Time Travel! logo">
                </div>
            </div>
            <div aria-hidden class="group-external">
                <div class="logo logo-external" v-for="n in 6" :key="n">
                    <img src="@/assets/timetravelBW.png" class="logo-img" alt="logo">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

/* calculo y dinamicidad para ajustar el fondo en movimiento */
const ancho = ref(window.innerWidth);
const alto = ref(window.innerHeight);

const hipotenusa = computed(() => {
    return Math.sqrt((ancho.value ** 2) + (alto.value ** 2));
})
const anguloDeg = computed(() => {
    var anguloRad = +Math.acos(ancho.value / hipotenusa.value).toFixed(2);
    return +(anguloRad * (180 / Math.PI)).toFixed(2);
})

const updateHeight = () => {
    alto.value = window.innerHeight;
}
const updateWidth = () => {
    ancho.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener('resize', updateHeight);
    window.addEventListener('resize', updateWidth);
})

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight);
    window.removeEventListener('resize', updateWidth);
})
</script>

<style scoped>
/*#EEEBD0 #ece7bc #573D1C #C17817*/
.back-texture {
    opacity: 0.2;
    transform: rotate(180deg);
    width: 100%;
    height: 100vh;
}

.background {
    background-color: #EEEBD0;
    background: radial-gradient(circle, #EEEBD0 15%, #ECE7BC 84%);
    width: 100vw;
    height: 100vh;
    position: absolute;
}

.object-container {
    position: absolute;
    height: 12rem;
    display: flex;
}

.oc1 {
    left: 30%;
    top: 50%;
}

.oc2 {
    left: 42%;
    top: 70%;
}

.oc3 {
    right: 18%;
    top: 20%;
}

.oc4 {
    right: 30%;
    top: 0;
}

.group,
.group-external {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    padding-right: 1.5em;

}

.group {
    animation: spin1 30s infinite linear;
}

.group-external {
    animation: spin2 30s infinite linear;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 11rem;
    width: 18rem;
    padding: 1rem;
    font-size: larger;
    opacity: 0.1;
    box-sizing: border-box;

}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-external img {
    width: 80%;
    height: 80%;
    object-fit: cover;
}

@keyframes spin1 {
    from {
        translate: 0;
    }

    to {
        translate: -100%;
    }
}

@keyframes spin2 {
    from {
        translate: -100%;
    }

    to {
        translate: 0%;
    }
}

@media(max-width: 950px) {
    .oc1 {
        left: 18%;
    }

    .oc2 {
        left: 28%;
    }

    .oc3 {
        right: 6%;
    }

    .oc4 {
        right: 16%;
    }
}

@media(max-width: 720px) {
    .oc1 {
        left: 10%;
    }

    .oc2 {
        left: 20%;
    }

    .oc3 {
        right: -2%;
    }

    .oc4 {
        right: 8%;
    }
}

@media(max-width: 550px) {
    .oc1 {
        left: -10%;
    }

    .oc2 {
        left: 10%;
    }

    .oc3 {
        right: -16%;
    }

    .oc4 {
        right: -2%;
    }
}

@media(max-width: 376px) {
    .oc1 {
        left: -25%;
    }

    .oc2 {
        left: -5%;
    }

    .oc3 {
        right: -32%;
    }

    .oc4 {
        right: -16%;
    }
}
</style>