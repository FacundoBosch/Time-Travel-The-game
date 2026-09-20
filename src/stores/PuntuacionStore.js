import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePuntuaciónStore = defineStore('puntaje', () => {
  const puntajeTotal = ref(0)
  const puntajeActual = ref(0)

  function descontar(valor) {
    // no es exactamente buena la función, pero es lo mejor que pude conseguir
    //puntajeActual.value = Math.round(5000 * (1 - (valor / 226) ** 1.3))
    puntajeActual.value = Math.round(-5000 * (1 - ((valor - 226) / 226) ** 2) + 5000)
    puntajeTotal.value = puntajeTotal.value + puntajeActual.value
  }

  function reiniciar() {
    puntajeActual.value = 0
    puntajeTotal.value = 0
  }

  return { reiniciar, descontar, puntajeActual, puntajeTotal }
})
