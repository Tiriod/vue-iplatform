<template>
    <div style="background-image: url('src/resources/image/Wild Lotus.jpeg');height: 660px">
        <el-row>
            <!--图像输入栏-->
            <el-col :span="16" style="text-align: center">
                <el-card
                        style="background-color: RGBA(60,171,134,0.3); margin: 10px; height: 540px;text-align: center">
                </el-card>
                <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #181818">选择需要进行分类的花束图像💐
                </el-button>
            </el-col>
            <!--结果输出栏-->
            <el-col :span="8" style="text-align: center">
                <!--结果卡片-->
                <el-card style="background-color: RGBA(60,171,134,0.3);margin: 10px; height: 540px">
                    <!--模型介绍卡片-->
                    <ClassificationModelView/>
                    <!--模型展示卡片-->
                    <ClassificationResultView/>
                </el-card>
                <!--提交按钮-->
                <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #181818;padding: 10px">开始图像分类
                </el-button>
            </el-col>
        </el-row>


    </div>
</template>
<script>
import ClassificationBanner from "@/views/Functional-module/Classification/components/ClassificationBanner.vue";
import ResultView from "@/views/Functional-module/Classification/components/ClassificationResultView.vue";
import ClassificationModelView from "@/views/Functional-module/Classification/components/ClassificationModelView.vue";
import ClassificationResultView from "@/views/Functional-module/Classification/components/ClassificationResultView.vue";

export default {
    name: "Classification",
    components: {ClassificationResultView, ClassificationModelView, ResultView, ClassificationBanner},

    setup() {
        const container_image_path = "src/resources/image/Wild Lotus.jpeg"
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
        ]
        return {
            container_image_path,
            tableData
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