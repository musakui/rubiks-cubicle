import { createApp } from 'vue'
import App from './App.vue'

const onResize = () => document.body.style.setProperty('--vh', window.innerHeight + 'px')
onResize()
window.addEventListener('resize', onResize)
createApp(App).mount('#app')