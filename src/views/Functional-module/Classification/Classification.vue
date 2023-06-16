<template>
    <div style="background-image: url('src/resources/image/Wild Lotus.jpeg');width: auto;height: 800px">
        <el-row>
            <el-col :span="16" style="text-align: center">
                <el-card
                        style="background-color: RGBA(100,100,100,0.3); margin: 10px; height: 480px;text-align: center">
                </el-card>
                <el-button style="background-color: RGBA(200,200,200,1);margin: 10px;">选择需要进行分类的花束图像💐
                </el-button>
            </el-col>
            <el-col :span="8">
                <el-card style="background-color: RGBA(100,100,100,0.3);;margin: 10px; height: 540px"></el-card>
            </el-col>
        </el-row>
        <el-card style="background-color: RGBA(100,100,100,0.5); margin: 10px">
            <div>
                <el-text style="color: #f8f8f8;margin: 5px;padding: 20px;font-size: x-large">图像分类模型介绍:
                </el-text>
            </div>
            <div>
                <el-text style="color: #f8f8f8;margin: 5px;padding: 20px">本模型
                </el-text>
            </div>
        </el-card>
    </div>


</template>
<script>
import ClassificationBanner from "@/views/Functional-module/Classification/components/ClassificationBanner.vue";

export default {
    name: "Classification",
    components: {ClassificationBanner},
    setup() {
        const container_image_path = "src/resources/image/Wild Lotus.jpeg"
        return {
            container_image_path
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