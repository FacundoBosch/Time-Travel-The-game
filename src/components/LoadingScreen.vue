<template>
    <div class="cargando-container">
        <div class="cargando-text">
            <span>Cargando</span>
            <div class="cargando-animation">
                <span id="dot-1">.</span>
                <span id="dot-2">.</span>
                <span id="dot-3">.</span>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.cargando-animation span {
    display: inline-block;
    animation: rebotar 1.2s infinite ease-in-out;
}

#dot-2 {
    animation-delay: 0.2s;
}

#dot-3 {
    animation-delay: 0.4s;
}

@keyframes rebotar {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }
}

.cargando-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #F2F7F2;
    font-size: 5rem;
    font-weight: 800;
    font-family: 'Bungee';
}

.cargando-text {
    width: 40%;
    height: 40%;
    padding: 1rem;
    box-sizing: border-box;

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    box-shadow: 0 0px 15px 5px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@media (max-width: 1025px) {
    .cargando-text {
        width: 70%;
    }
}

@media (max-width: 840px) {
    .cargando-text {
        flex-direction: column;
    }
}

@media (max-width: 685px) {
    .cargando-text {
        width: 90%;
    }
}

@media (max-width: 535px) {
    .cargando-container {
        font-size: 3.5rem;
    }

    .cargando-text {
        height: 30%;
    }
}

@media (max-width: 370px) {
    .cargando-container {
        font-size: 2rem;
    }
}
</style>