import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentStore = defineStore('juego', () => {
  const juego = ref([])
  const resultFlag = ref(false)

  function EstablecerJuego() {
    for (let i = 0; i < 5; i++) {
      var chosen = Math.floor(Math.random() * 10)
      var tempFlag = false

      for (let j in juego.value) {
        if (i != j && juego.value[j] === chosen) {
          i = i - 1
          tempFlag = true
        }
      }

      if (tempFlag == false) {
        juego.value[i] = chosen
      }
    }

    return 'Juego armado!'
  }

  return { juego, EstablecerJuego, resultFlag }
})
