import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home/Home.vue";
import Classification from "@/views/Functional-module/Classification/Classification.vue";
import Detection from "@/views/Functional-module/Detedtion/Detection.vue";
import Semantics from "@/views/Functional-module/Semantics/Semantics.vue";
import About from "@/views/About/About.vue";

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
            // 配置Classification图像分类页面
            path: '/Classification',
            name: Classification,
            component: Classification
        },
        {
            // 配置Detection目标检测页面
            path: '/Detection',
            name: Detection,
            component: Detection
        },
        {
            // 配置Semantics语义分割页面
            path: '/Semantics',
            name: Semantics,
            component: Semantics
        },
        {
            // 配置About页面
            path: '/About',
            name: About,
            component: About
        },
        {
            // 配置About页面
            path: '/About',
            name: About,
            component: About
        }
    ]
})

export default router