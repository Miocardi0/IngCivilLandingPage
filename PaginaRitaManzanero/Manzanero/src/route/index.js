import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Asegúrate de que esta ruta es correcta
import About from '../views/About.vue'; // Asegúrate de que esta ruta es correcta
import Services from '../views/Services.vue'; // Asegúrate de que esta ruta es correcta
import Contact from '../views/Contact.vue'; // Asegúrate de que esta ruta es correcta

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    },
    {
        path: '/Services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory('/RitaManzanero/'),
    routes,
});

export default router;
