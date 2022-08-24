import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Game } from './game'

createApp(App).mount('#app')

new Game().Awake()
