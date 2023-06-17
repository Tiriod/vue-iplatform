<template>
    <div style="background-image: url('src/resources/image/Wild Lotus.jpeg');width: auto;height: 800px">
        <el-row>
            <!--图像输入栏-->
            <el-col :span="16" style="text-align: center">
                <el-card
                        style="background-color: RGBA(60,171,134,0.3); margin: 10px; height: 480px;text-align: center">
                </el-card>
                <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #181818">选择需要进行分类的花束图像💐
                </el-button>
            </el-col>
            <!--结果输出栏-->
            <el-col :span="8">
                <el-card style="background-color: RGBA(60,171,134,0.3);;margin: 10px; height: 540px">
                    <h1>1</h1>
                    <ResultView/>
                </el-card>
            </el-col>
        </el-row>
        <!--模型介绍栏-->
        <el-card style="background-color: RGBA(60,171,134,0.5); margin: 10px">
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
import ResultView from "@/views/Functional-module/Classification/components/ResultView.vue";

export default {
    name: "Classification",
    components: {ResultView, ClassificationBanner},

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
            {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-07',
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