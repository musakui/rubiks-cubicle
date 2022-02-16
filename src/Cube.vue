<template>
  <canvas ref="canvasEl"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { millis } from './utils.js'

let cube = null

const canvasEl = ref(null)
const props = defineProps({ moves: Array })

onMounted(async () => {
  const { createCube } = await import('./cube.js')
  cube = createCube(canvasEl.value)
  for (const move of props.moves) {
    await cube.rotate(move.letter, move.mod ? (move.mod === '′' ? -1 : 2) : 1)
  }
  for (let i = 0; i < 100; ++i) {
    await millis(5)
    cube.lights(i / 100)
  }
})

onUnmounted(() => cube?.dispose())
</script>

<style>
canvas {
  --height: min(200px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) * 3 / 2));
  background-color: black;
}
</style>