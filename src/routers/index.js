import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 初始化路由
            path: '/',
            name: Home,
            component: Home
        },
        {
            // 配置Home页面
            path: '/Home',
            name: Home,
            component: Home
        },
        {
            // 配置Login页面
            path: '/Login',
            name: Login,
            component: Login
        },
    ]
})

export default router