import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/Login',
            name: Login,
            component: Login
        },
        {
            path: '/',
            name: Home,
            component: Home
        }
    ]
})

export default router