<template>
    <Background class="background"></Background>
    <div class="content-container">
        <router-view></router-view>
    </div>
</template>

<script setup>
import Background from '@/components/Background.vue';

</script>

<style scoped>
.background {
    z-index: -500;
}

/* COMIENZA EL BACKGROUND */
.content-container {
    z-index: 1;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>