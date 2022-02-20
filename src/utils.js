const epoch = new Date('February 14, 2022 00:00:00').valueOf()

const int32 = 2 ** 32
const mulberry32 = (seed) => () => {
  let t = seed += 0x6D2B79F5
  t = Math.imul(t ^ t >>> 15, t | 1)
  t ^= t + Math.imul(t ^ t >>> 7, t | 61)
  return ((t ^ t >>> 14) >>> 0) / int32
}

const LETTERS = [...'FBUDLR']
export const PRIME = '′'
export const SQUARE = '²'
export const KEYS = [LETTERS, ['Enter', PRIME, '2', 'Backspace']]

export const reverse = (arr) => [...arr].reverse()
export const range = (length, fn) => Array.from({ length }, fn)
export const millis = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
export const dayIndex = Math.floor((Date.now() - epoch) / 86400000)

export const getMoves = (seed) => {
  const s = parseInt(seed)
  const random = isNaN(s) ? Math.random : mulberry32(s)
  const randInt = (max) => Math.floor(random() * max)
  const randExcept = (n, max) => {
    let r = n
    while (r === n) { r = randInt(max) }
    return r
  }
  const moves = []
  let r, i, idx = null
  for (i = 0; i < 5; ++i) {
    idx = randExcept(idx, 6)
    r = random()
    moves.push({
      letter: LETTERS[idx],
      mod: r < 0.2 ? SQUARE : (r < 0.6 ? PRIME : ''),
    })
  }
  return moves
}

export const answerChecker = (answer) => {
  const clone = () => JSON.parse(JSON.stringify(answer))
  return (guess) => {
    const trial = clone()

    // first pass: mark fully correct ones
    for (const [i, tile] of guess.entries()) {
      if (trial[i].letter === tile.letter && trial[i].mod === tile.mod) {
        tile.state = 4
        trial[i] = {}
      }
    }

    // 2nd pass: mark correct letter, wrong modifier
    for (const [i, tile] of guess.entries()) {
      if (tile.state) continue
      if (trial[i].letter === tile.letter) {
        tile.state = 3
        trial[i].letter = ''
      }
    }

    // 3nd pass: mark present or absent letter
    for (const tile of guess) {
      if (tile.state) continue
      const found = trial.find((t) => t.letter === tile.letter)
      if (found) {
        tile.state = 2
        found.letter = ''
      } else {
        tile.state = 1
      }
    }

    return guess.every((tile) => tile.state === 4)
  }
}