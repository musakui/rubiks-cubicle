<template>
  <canvas ref="canvasEl"></canvas>
</template>

<script setup>
import { Engine } from '@babylonjs/core/Engines/engine'
import { ref, watch, onMounted, onUnmounted } from 'vue'

let engine = null
let rotate = null

const canvasEl = ref(null)
const props = defineProps({ init: Array, moves: Array })

onMounted(() => {
  engine = new Engine(canvasEl.value, true)
  import('./scene.js').then(async ({ createScene, init }) => {
    const scene = createScene(engine)
    const [createCamera, createRotate] = await init
    rotate = createRotate(scene)
    for (const move of [...props.init].reverse()) {
      await rotate(move.letter, move.mod ? (move.mod === '′' ? 1 : 2) : -1, 0)
    }
    createCamera(scene).attachControl(canvasEl.value, true)
    engine.runRenderLoop(() => scene.render())
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
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>