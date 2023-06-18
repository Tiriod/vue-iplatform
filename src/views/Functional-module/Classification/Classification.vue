<template>
    <div style="background-image: url('src/resources/image/Wild Lotus.jpeg');height: 660px">
        <el-row>
            <!--图像输入栏-->
            <el-col :span="16" style="text-align: center">
                <ClassificationImageInputView/>
            </el-col>
            <!--结果输出栏-->
            <el-col :span="8" style="text-align: center">
                <ClassificationResultOutputView/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ClassificationModelView from "@/views/Functional-module/Classification/components/ClassificationModelView.vue";
import ClassificationResultView from "@/views/Functional-module/Classification/components/ClassificationResultView.vue";
import ClassificationImageInputView
    from "@/views/Functional-module/Classification/components/ClassificationImageInputView.vue";
import ClassificationResultOutputView
    from "@/views/Functional-module/Classification/components/ClassificationResultOutputView.vue";

export default {
    name: "Classification",
    components: {
        ClassificationResultOutputView,
        ClassificationImageInputView, ClassificationResultView, ClassificationModelView,
    },

    setup() {
        const container_image_path = "src/resources/image/Wild Lotus.jpeg"
        return {
            container_image_path,
        }
    }
}
</script>
<style scoped>
.background-image {
    /* 背景图片相关样式 */
    background-size: cover;
    background-position: center;
    /* 其他样式 */
}

</style>