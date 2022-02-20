<template>
  <canvas ref="canvasEl"></canvas>
</template>

<script setup>
import { Engine } from '@babylonjs/core/Engines/engine'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { PRIME, reverse } from './utils.js'

let engine = null
let rotate = null

const canvasEl = ref(null)
const turn = (mod) => mod ? (mod === PRIME ? -1 : 2) : 1
const props = defineProps({ init: Array, moves: Array })

onMounted(() => {
  engine = new Engine(canvasEl.value, true)
  import('./scene.js').then(async ({ createScene, init }) => {
    const scene = createScene(engine)
    const [createCamera, createRotate] = await init
    rotate = createRotate(scene)
    for (const move of reverse(props.init)) {
      await rotate(move.letter, -turn(move.mod))
    }
    createCamera(scene).attachControl(canvasEl.value, true)
    engine.runRenderLoop(() => scene.render())
  })
})

watch(() => props.moves, async (val, oldval) => {
  if (!rotate) return
  if (val.length) {
    for (const move of val) {
      await rotate(move.letter, turn(move.mod), 16)
    }
  } else if (oldval.length) {
    for (const move of reverse(oldval)) {
      await rotate(move.letter, -turn(move.mod), 5)
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