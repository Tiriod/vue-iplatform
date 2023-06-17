<template>
    <!--结果卡片-->
    <el-card style="background-color: RGBA(60,171,134,0.3);margin: 10px; height: 560px">
        <!--模型介绍卡片-->
        <ClassificationModelView/>
        <!--模型展示卡片-->
        <ClassificationResultView/>
    </el-card>
    <!--提交按钮-->
    <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #f8f8f8;padding: 10px">开始图像分类
    </el-button>
</template>

<script>
import ClassificationModelView from "@/views/Functional-module/Classification/components/ClassificationModelView.vue";
import ClassificationResultView from "@/views/Functional-module/Classification/components/ClassificationResultView.vue";

export default {
    name: "ClassificationResultOutputView",
    components: {ClassificationResultView, ClassificationModelView}
}
</script>

<style scoped>

</style>