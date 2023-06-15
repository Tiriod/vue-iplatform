<!--一级路由出口组件-->
<template>
    <!--  标题头内容  -->
    <el-header style="padding: 0">
        <el-menu :default-active="activeIndex2"
                 class="el-menu-demo"
                 mode="horizontal"
                 background-color="#3CAB86"
                 text-color="#254228"
                 active-text-color="#ffd04b"
                 @select="handleSelect">
            <el-menu-item index="1" style="width: 120px;margin: 0 2px">首 页</el-menu-item>
            <el-sub-menu index="2">
                <template #title style="width: 120px;margin: 0 2px">功 能 模 块</template>
                <el-menu-item href="/class" index="2-1">图 像 分 类</el-menu-item>
                <el-menu-item index="2-2">目 标 检 测</el-menu-item>
                <el-menu-item index="2-3">语 义 分 割</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3" style="width: 120px;margin: 0 2px">数 据 统 计</el-menu-item>
            <el-menu-item index="4" style="width: 120px;margin: 0 2px">关 于</el-menu-item>
        </el-menu>
    </el-header>
    <RouterView/>
</template>
<script lang="ts" setup>
import {Memo, Picture as IconPicture, Postcard, Reading, Sugar, User} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

function submitImage() {
    // 创建一个input元素
    var input = document.createElement('input');
    input.type = 'file';

    // 设置input元素的change事件处理程序
    input.addEventListener('change', function (event) {
        var file = event.target.files[0];
        // 处理上传的文件
        handleFile(file);
    });

    // 模拟点击input元素
    input.click();
}

// 处理上传的文件
function handleFile(file) {
    // 在这里可以执行上传文件的逻辑，例如使用FormData对象上传到服务器
    // 你可以在这个函数中添加你的自定义逻辑

    // 示例：创建FormData对象并将文件添加到表单中
    var formData = new FormData();
    formData.append('file', file);

    // 示例：使用XMLHttpRequest发送FormData对象
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/api_test', true);
    xhr.send(formData);

    // 添加上传成功后的处理逻辑
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('上传成功');
            // 在上传成功后，你可以执行一些额外的操作，如显示上传成功的提示信息或更新页面内容
        } else {
            console.log('上传失败');
            // 处理上传失败的情况，如显示上传失败的提示信息或执行错误处理逻辑
        }
    };
}

</script>
<style scoped>
header {
    line-height: 1.5;
}

/*demo-image CSS*/
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
}

.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.demo-image .el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
    width: 100%;
    height: 200px;
}

.demo-image .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}

.demo-image .image-slot .el-icon {
    font-size: 30px;
}

</style>
