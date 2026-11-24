import './assets/main.css';

import { initializeScrollEvents } from './scripts/scroll.js';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
initializeScrollEvents();