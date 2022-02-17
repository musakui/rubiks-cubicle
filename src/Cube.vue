<template>
  <canvas ref="canvasEl"></canvas>
</template>

<script setup>
import { Engine } from '@babylonjs/core/Engines/engine'
import { ref, watch, onMounted, onUnmounted } from 'vue'

let scene = null
let engine = null
let rotate = null

const canvasEl = ref(null)
const props = defineProps({ init: Array, moves: Array })

onMounted(() => {
  engine = new Engine(canvasEl.value, true)
  Promise.all([
    import('./scene.js'),
    import('./geometry.js'),
  ]).then(async ([{ createScene, createRotator }, { createCubies, animate }]) => {
    scene = createScene(engine)
    engine.runRenderLoop(() => scene.render())
    const cubies = createCubies(scene)
    rotate = createRotator(scene, cubies, animate)
    for (const move of [...props.init].reverse()) {
      await rotate(move.letter, move.mod ? (move.mod === '′' ? 1 : 2) : -1, 0)
    }
  })
})

watch(() => props.moves, async (val, oldval) => {
  if (!rotate) return
  if (val.length) {
    for (const move of val) {
      await rotate(move.letter, move.mod ? (move.mod === '′' ? -1 : 2) : 1, 16)
    }
  } else if (oldval.length) {
    for (const move of [...oldval].reverse()) {
      await rotate(move.letter, move.mod ? (move.mod === '′' ? 1 : 2) : -1, 5)
    }
  }
})

onUnmounted(() => engine?.dispose())
</script>

<style>
canvas {
  --height: min(200px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) * 3 / 2));
  background-color: black;
}
</style>