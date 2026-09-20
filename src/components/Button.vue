<template>
    <div class="container">
        <div class="btn-back">
            <div class="btn-front">
                <button class="btn">
                    <img src="@/assets/plastictexture.jpg" class="texture" alt="texture">
                    <span>
                        <slot></slot>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* #659157 #091E05 #1d5511 */
.container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-back {
    position: relative;
    z-index: 410;

    width: 80%;
    height: 80%;
    background-color: #659157;
    border-radius: 15px;

    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.65);
}

.btn-front {
    position: absolute;
    z-index: 411;

    width: 100%;
    height: 90%;
    top: -10px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #659157;
    border-radius: 15px;

    transition: all 0.2s ease-in-out;
}

.btn {
    width: 100%;
    height: 100%;

    background-color: #659157;
    border: 4px #1d5511 solid;
    border-radius: 15px;
    box-shadow: 0 10px 12px -6px rgba(0, 0, 0, 0.25);

    font-size: x-large;
    font-weight: 400;
    font-family: "Viga", sans-serif;
    color: #F2F7F2;

    display: flex;
    align-items: center;
    justify-content: center;
}

.btn span {
    position: absolute;
}

.texture {
    width: 100%;
    height: 100%;
    object-fit: none;
    border-radius: 15px;
    opacity: 0.05;
    position: relative;
}

.btn-front:hover {
    top: -7px;
    cursor: pointer;
}

.btn-front:active {
    top: -2px;
}

.btn:hover {
    cursor: pointer;
}
</style>