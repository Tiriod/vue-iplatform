<template>
    <div style="background-image: url('public/resources/image/Wild Lotus.jpeg');height: 660px">
        <el-row>
            <!--图像输入栏-->
            <el-col :span="16" style="text-align: center">
                <el-card style="background-color: RGBA(60,171,134,0.3); margin: 10px; height: 560px;">
                    <el-image
                            :src="image"
                            fit="contain"
                            style="padding: 5%;width: 80%"
                    ></el-image>
                </el-card>
                <el-upload
                        class="upload-demo"
                        :action="uploadURL"
                        :on-success="handleSuccess"
                        :before-upload="beforeUpload"
                        name="file"
                        :show-file-list="false">
                    <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #f8f8f8;padding: 10px;">
                        点击上传图片
                    </el-button>
                </el-upload>
            </el-col>
            <!--结果输出栏-->
            <el-col :span="8" style="text-align: center">
                <!--结果卡片-->
                <el-card style="background-color: RGBA(60,171,134,0.3);margin: 10px; height: 640px">
                    <!--模型介绍卡片-->
                    <el-card style="background-color: RGBA(60,171,134,0.5);margin: 10px">
                        <div>
                            <el-text style="color: #f8f8f8;margin: 5px;padding: 20px;font-size: x-large">图像分类模型介绍:
                            </el-text>
                        </div>
                        <div>
                            <el-text style="color: #f8f8f8;margin: 5px;padding: 20px">本模型
                            </el-text>
                        </div>
                    </el-card>
                    <div style="height: 20px"></div>
                    <!--模型展示卡片-->
                    <el-table :data="tableData" style="width: 100%; height: 300px;border-radius: 10px;padding: 5px">
                        <el-table-column fixed prop="serial_number" label="序号" width="100"/>
                        <el-table-column prop="name" label="检测结果" width="200"/>
                        <el-table-column prop="confidence" label="置信度" width="200"/>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {ref} from "vue";
import axios from "axios";
import httpInstance from "@/utils/httpUtil";

export default {
    name: "Classification",
    setup() {
        const image = ref("public/resources/image/Lotus.png");
        const uploadURL = "http://127.0.0.1:8000/api/classification";
        const container_image_path = "src/resources/image/Wild Lotus.jpeg";
        const image_id = ''
        // 创建一个取消令牌实例
        const cancelToken = axios.CancelToken.source();


        function handleSuccess(response) {
            const image_id = response.image_id
            console.log(response)
            modelClassification(image_id)
                    .then(result => {
                        console.log(result);
                        // 在这里处理返回的结果
                    })
                    .catch(error => {
                        console.log(error);
                        // 处理错误情况
                    });
        }

        function beforeUpload(file) {
            console.log("上传数据:", file);
        }

        function modelClassification(imageId) {
            console.log("开始进行模型调用");
            console.log(imageId);
            return httpInstance({
                url: `model/classification/${imageId}/`,
                method: "POST",
                cancelToken: cancelToken.token
            })
        }

        return {image, uploadURL, handleSuccess, beforeUpload, container_image_path, image_id, cancelToken};
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