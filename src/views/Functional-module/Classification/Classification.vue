<template>
    <div style="background-image: url('public/resources/image/Wild Lotus.jpeg');height: 660px">
        <el-row>
            <!--图像输入栏-->
            <el-col :span="16" style="text-align: center">
                <el-card style="background-color: RGBA(60,171,134,0.3); margin: 10px; height: 560px;">
                    <el-image
                            :src="image"
                            fit="contain"
                            style="padding: 5%;width: 480px; height: 480px"
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
                            <el-text style="color: #f8f8f8;margin: 5px;padding: 20px">本模型是 VGG-16 的ImageNet模型
                            </el-text>
                        </div>
                    </el-card>
                    <div style="height: 20px"></div>
                    <!--模型展示卡片-->
                    <el-table :data="classification_result"
                              style="width: 100%; height: 450px; border-radius: 10px; padding: 5px">
                        <el-table-column fixed prop="id" label="序号" width="80"/>
                        <el-table-column prop="name" label="检测结果" width="240"/>
                        <el-table-column prop="confidence" label="置信度" width="100"/>
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
        // 默认显示图像路径
        const image = ref("public/resources/image/Lotus.png");
        const uploadURL = "http://127.0.0.1:8000/api/classification";
        // 上传的image图像的id属性
        const image_id = ref('')
        // 上传的image图像Base64编码
        const image_data = ref('')
        // 创建一个取消令牌实例
        const cancelToken = axios.CancelToken.source();
        let classification_result = ref([{"id": 0, "name": "等待数据传输", "confidence": "等待数据传输"}])
        let decodeData = ref('');
        // 默认图像转码地址
        let imageURL = ref('');

        // 使用handle传参成功返回函数
        function handleSuccess(response) {

            const image_id = response.image_id
            image_data.value = response.image_data
            image.value = convertToImageURL(parseBase64(response.image_data));
            console.log(image_data.value)

            modelClassification(image_id)
                    .then(result => {
                        classification_result.value = result["result"]
                        console.log(classification_result);
                    })
                    .catch(error => {
                        console.log(error);
                        // 处理错误情况
                    });
        }

        // Upload执行前函数
        function beforeUpload(file) {
            // 将现在的数据表显示内容动态加载为 ”模型加载中“
            classification_result.value = [{"id": "模型加载中", "name": "模型加载中", "confidence": "模型加载中"}]
        }

        // 使用模型进行图像分类方法
        function modelClassification(imageId) {
            return httpInstance({
                url: `model/classification/${imageId}/`,
                method: "POST",
                cancelToken: cancelToken.token
            })
        }

        // 将Base64编码转码为Byte类型
        function parseBase64(base64String) {
            const binaryString = atob(base64String);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return new Blob([bytes], {type: 'image/png'}); // 根据实际数据类型调整参数
        }

        function convertToImageURL(blob) {
            return URL.createObjectURL(blob);
        }


        return {
            image,
            image_id,
            uploadURL,
            handleSuccess,
            beforeUpload,
            cancelToken,
            classification_result,
            decodeData,
            imageURL,
        };
    }
}
</script>
<style scoped>
</style>