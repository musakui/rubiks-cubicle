<template>
  <Transition>
    <div class="message" v-if="state.message">{{ state.message }}</div>
  </Transition>
  <CubeView :init="answer" :moves="state.show" />
  <button id="info" aria-label="help" @click="state.help = !state.help">?</button>
  <Transition>
    <div v-if="state.help" id="help">
      Guess 5 moves to solve the cube.
      <p>Moves are represented in Singmaster Notation where each letter represents a face.</p>
      <div style="text-align:center">(U)p, (D)own, (F)ront, (B)ack, (L)eft, (R)ight</div>
      <p>For simplicity, F is Blue and R is Orange for this cube.</p>
      <p>
      A given letter means the face should be turned clockwise 90&deg; (while facing it).
      A prime mark (′) after the letter means it should be turned anti-clockwise 90&deg;,
      and a square (²) means it should be turned 180&deg;
      </p>
      Colours:
      <ul>
        <li>Green: the move is in the correct spot</li>
        <li>Blue: the face is correct but wrong amount of turning</li>
        <li>Yellow: the face is used but in the wrong spot</li>
        <li>Otherwise, the face is not used at all</li>
      </ul>
      Have fun!
    </div>
  </Transition>
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
    <div class="krow" v-for="row in KEYS">
      <button v-for="key in row" v-bind="buttonProps(key)" @click="onKeyup(key)">
        <template v-if="key !== 'Backspace'">{{ key }}</template>
        <svg v-else v-bind="svgSize" viewBox="0 -12 24 24">
          <path :d="backspacePath" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import CubeView from './Cube.vue'
import LetterTile from './Tile.vue'
import { reactive, onUnmounted } from 'vue'
import { KEYS, SQUARE, PRIME, millis, range, reverse, dayIndex, answerChecker, getMoves } from './utils.js'

let allowInput = true

const svgSize = { width: 24, height: 24 }
const buttonProps = (key) => key.length > 1 && { 'class': 'big', 'aria-label': key }
const successMessages = ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew']
const backspacePath = `m0 0l5 7c1 1 1 1 2 1h14c1 0 2-1 2-2v-12c0-1-1-2-2-2h-14c-1 0-1 0-2 1zM9 4l8-8M9-4l8 8`

const answer = getMoves(window.location.search.slice(1) || dayIndex)
const checker = answerChecker(answer)

const board = reactive(range(6, () => range(5, () => ({ letter: '', mod: '', state: 0 }))))
const state = reactive({
  cur: 0,
  shake: -1,
  done: false,
  help: false,
  message: '',
  show: [],
})

const modTile = (mod) => {
  for (const tile of reverse(board[state.cur])) {
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

const shake = async (message = '') => {
  state.message = message
  state.shake = state.cur
  await millis(1200)
  allowInput = true
  state.shake = -1
  state.message = ''
}

const submit = async () => {
  allowInput = false
  const current = board[state.cur]

  if (!current.every((t) => t.letter)) return await shake()

  if (current.slice(1).some((t, i) => t.letter === current[i].letter)) {
    return await shake('Adjacent letters should be different')
  }

  state.show = current

  if (checker(current)) {
    await millis(1000)
    state.message = successMessages[state.cur]
    state.done = true
    await millis(2000)
    state.message = ''
  } else if (state.cur < 5) {
    await millis(2500)
    ++state.cur
    state.show = []
    allowInput = true
  } else {
    await millis(1500)
    const ans = answer.map((t) => `${t.letter}${t.mod}`).join(' ')
    state.message = `Oops. It was ${ans}`
  }
}

const onKeyup = (evt) => {
  if (!allowInput) return
  const key = evt.key || evt
  switch (key) {
    case 'Enter':
      submit()
      break
    case 'Backspace':
      modTile()
      break
    case '2':
      modTile(SQUARE)
      break
    case '`': case "'": case PRIME:
      modTile(PRIME)
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
.message {
  position: absolute;
  top: 10%;
  left: 50%;
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
  --height: min(420px, calc(var(--vh, 100vh) - 50px));
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
  margin: 20px 8px 0;
  user-select: none;
}

.krow {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
#keyboard button {
  font-weight: bold;
  border: 0;
  height: 55px;
  margin: 0 3px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  color: #ccc;
  background-color: #444;
  flex: 1;
  transition: all 0.2s 1.5s;
}
button.big {
  flex: 1.5;
}

#info {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  border: 1px #fff solid;
  border-radius: 100%;
  color: #ccc;
  background-color: #111;
  cursor: pointer;
  user-select: none;
}
svg path {
  fill: none;
  stroke: #fff;
  stroke-width: 1.5;
}

#help {
  position: absolute;
  top: 5%;
  left: 50%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 16px 20px;
  z-index: 2;
  border-radius: 4px;
  width: 80vw;
  height: 50%;
  overflow-y: auto;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-out;
}
#help.v-leave-to, #help.v-enter-from {
  opacity: 0;
}
</style>