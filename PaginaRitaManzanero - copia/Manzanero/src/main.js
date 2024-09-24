import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './route'; // Asegúrate de que la ruta sea correcta

createApp(App).use(router).mount('#app');
