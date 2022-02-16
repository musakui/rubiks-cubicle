<template>
  <div :class="['tile', letter && 'filled', state && 'revealed']">
    <div class="front" :style="{ transitionDelay }">
      {{ letter }}{{ mod }}
    </div>
    <div :class="['back', backClasses[state]]" :style="{ animationDelay, transitionDelay }" >
      {{ letter }}{{ mod }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  index: Number,
  state: Number,
  letter: String,
  mod: String,
})
const animationDelay =  `${props.index * 100}ms`
const transitionDelay =  `${props.index * 300}ms`
const backClasses = ['', 'absent', 'present', 'gmod', 'correct']
</script>

<style>
.correct {
  background-color: #6aaa64 !important;
}

.present {
  background-color: #c9b458 !important;
}

.gmod {
  background-color: #0f52e4 !important;
}

.absent {
  background-color: #787c7e !important;
}

.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  user-select: none;
  position: relative;
}
.tile.filled {
  animation: zoom 0.2s;
}
.tile .front,
.tile .back {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.tile .front {
  border: 2px solid #979ea7;
}
.tile.filled .front {
  border-color: #999;
}
.tile .back {
  transform: rotateX(180deg);
}

.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}

@keyframes zoom {
  0% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-height: 680px) {
  .tile { font-size: 3vh; }
}
</style>