<template>
  <Transition>
    <div class="message" v-if="state.message">{{ state.message }}</div>
  </Transition>
  <header>
    <h1>Rubik's Cubicle</h1>
    <a id="source" href="https://github.com/musakui/rubiks-cubicle" target="_blank" >Source</a>
  </header>
  <div id="board">
    <div v-for="(row, i) in board" :class="[
      'row',
      state.shake === i && 'shake',
      state.done && state.cur === i && 'jump'
    ]">
      <LetterTile v-for="(tile, j) in row" v-bind="tile" :index="j" />
    </div>
  </div>
  <div id="keyboard">
    <div class="krow" v-for="(row, i) in keyboard">
      <div class="spacer" v-if="i === 1"></div>
      <button v-for="key in row" :class="[key.length > 1 && 'big']" @click="onKeyup({ key })">
        <span v-if="key !== 'Backspace'">{{ key }}</span>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
          <path :d="backspacePath" />
        </svg>
      </button>
      <div class="spacer" v-if="i === 1"></div>
    </div>
  </div>
</template>

<script setup>
import LetterTile from './Tile.vue'
import { reactive, onUnmounted } from 'vue'
import { LETTERS, millis, range, dayIndex, answerChecker, getMoves } from './utils.js'

let allowInput = true

const keyboard = [LETTERS, ['Enter', '′', '2', 'Backspace']]
const successMessages = ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew']
const backspacePath = `m22 3h-15c-1 0-1 0-2 1l-5 8 5 8c1 1 1 1 2 1h15c1 0 2-1 2-2v-14c0-1-1-2-2-2z
m0 16h-15l-5-7 5-7h15v14zm-12-2 4-4 4 4 1-1-4-4 4-4-1-1-4 4-4-4-1 1 4 4-4 4z`

const answer = getMoves(window.location.search.slice(1) || dayIndex)
const checker = answerChecker(answer)

const board = reactive(range(6, () => range(5, () => ({ letter: '', mod: '', state: 0 }))))
const state = reactive({
  cur: 0,
  shake: -1,
  done: false,
  message: '',
})

const modTile = (mod) => {
  for (const tile of [...board[state.cur]].reverse()) {
    if (!tile.letter) continue
    if (mod) {
      tile.mod = mod
    } else {
      tile.mod = ''
      tile.letter = ''
    }
    break
  }
}

const submit = async () => {
  const current = board[state.cur]

  if (!current.every((t) => t.letter)) {
    allowInput = false
    state.shake = state.cur
    await millis(1000)
    allowInput = true
    state.shake = -1
    return
  }

  allowInput = false
  const correct = checker(current)
  await millis(1500)

  if (correct) {
    state.message = successMessages[state.cur]
    state.done = true
  } else if (state.cur < 5) {
    ++state.cur
    allowInput = true
  } else {
    state.message = answer.map((t) => `${t.letter}${t.mod}`).join(' ')
  }
}

const onKeyup = ({ key }) => {
  if (!allowInput) return
  switch (key) {
    case 'Enter':
      submit()
      break
    case 'Backspace':
      modTile()
      break
    case '2':
      modTile('²')
      break
    case '`': case '′': case "'":
      modTile('′')
      break
    default:
      if (!/^[bdflruBDFLRU]$/.test(key)) return
      for (const tile of board[state.cur]) {
        if (tile.letter) continue
        tile.letter = key.toUpperCase()
        return
      }
  }
}

window.addEventListener('keyup', onKeyup)
onUnmounted(() => window.removeEventListener('keyup', onKeyup))
</script>

<style>
body {
  font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 0px auto;
}

h1 {
  margin: 4px 0;
  font-size: 36px;
}

header {
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  position: relative;
}

#source {
  position: absolute;
  right: 0.5em;
  top: 0.25em;
  color: #d3d6da;
  padding: 0.5em;
  border: 1px solid white;
}

.message {
  position: absolute;
  left: 50%;
  top: 80px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 16px 20px;
  z-index: 2;
  border-radius: 4px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-out;
  font-weight: 600;
}
.message.v-leave-to {
  opacity: 0;
}

#board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  --height: min(420px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) / 6 * 5));
  margin: 0px auto;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
   0% { transform: translate(1px); }
  10% { transform: translate(-2px); }
  20% { transform: translate(2px); }
  30% { transform: translate(-2px); }
  40% { transform: translate(2px); }
  50% { transform: translate(-2px); }
  60% { transform: translate(2px); }
  70% { transform: translate(-2px); }
  80% { transform: translate(2px); }
  90% { transform: translate(-2px); }
  99% { transform: translate(1px); }
}

.jump .tile .back {
  animation: jump 0.5s;
}

@keyframes jump {
   0% { transform: translateY(0px); }
  20% { transform: translateY(5px); }
  60% { transform: translateY(-25px); }
  90% { transform: translateY(3px); }
  99% { transform: translateY(0px); }
}

#keyboard {
  margin: 30px 8px 0;
  user-select: none;
}

.krow {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
.spacer {
  flex: 0.5;
}
button {
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #d3d6da;
  color: #1a1a1b;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s 1.5s;
}
button:last-of-type {
  margin: 0;
}
button.big {
  flex: 1.5;
}
</style>