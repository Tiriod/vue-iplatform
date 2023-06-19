<!--一级路由出口组件-->
<template>
    <!--  标题头内容  -->
    <el-header style="padding: 0;offset: 0">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 background-color="#3CAB86"
                 text-color="#254228"
                 active-text-color="#ffd04b"
                 @select="handleSelect">
            <el-image style=" height: 58.4px" :src="title_image_path"/>
            <el-menu-item index="1" style="width: 120px;margin: 0 2px">
                <router-link to="/Home" style="text-decoration: none">首 页</router-link>
            </el-menu-item>

            <el-sub-menu index="2">
                <template #title style="width: 120px;margin: 0 2px">功 能 模 块</template>
                <el-menu-item index="2-1">
                    <router-link to="/Classification" style="text-decoration: none; color: #3D3D3D;padding: initial">
                        图 像 分 类
                    </router-link>
                </el-menu-item>
                <router-link to="/Detection" style="text-decoration: none; color: #3D3D3D;padding: initial">
                    <el-menu-item index="2-2">
                        目 标 检 测
                    </el-menu-item>
                </router-link>
                <router-link to="/Semantics" style="text-decoration: none; color: #3D3D3D;padding: initial">
                    <el-menu-item index="2-3">
                        语 义 分 割
                    </el-menu-item>
                </router-link>
            </el-sub-menu>
            <el-menu-item index="3" style="width: 120px;margin: 0 2px">
                <router-link to="/Statistics" style="text-decoration: none;">
                    数 据 统 计
                </router-link>
            </el-menu-item>
            <el-menu-item index="4" style="width: 120px;margin: 0 2px">
                <router-link to="/About" style="text-decoration: none;">
                    关 于 开 发
                </router-link>
            </el-menu-item>
        </el-menu>
    </el-header>
    <RouterView/>
</template>
<script lang="ts">
import {ref} from 'vue'

export default {
    setup() {
        const activeIndex = ref('1')
        const title_image_path = "public/resources/image/Title.png"
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        return {
            activeIndex,
            handleSelect,
            title_image_path
        }
    }
}
</script>


<style scoped>
header {
    line-height: 1.5;
}


</style>
