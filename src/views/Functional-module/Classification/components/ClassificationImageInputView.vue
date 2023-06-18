<template>
    <el-card
            style="background-color: RGBA(60,171,134,0.3); margin: 10px; height: 560px;text-align: center">
        <el-image :src="image" fit="cover"></el-image>
    </el-card>
    <el-upload
            class="upload-demo"
            action="http://127.0.0.1:8000/api_classification"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            :name="image">
    <el-button style="background-color: RGBA(60,171,134,1);margin: 10px;color: #f8f8f8;padding: 10px">点击上传图片
    </el-button>
    </el-upload>
</template>
<script>
import {reactive, ref} from "vue";
import axios from "axios";

export default {
    name: "ClassificationImageInputView",
    setup() {
        const image = ref('src/resources/image/Lotus.png')

        function handleSuccess(response, image, fileList) {
            console.log("上传成功:", response)
            image.value = response.url;
        }

        function beforeUpload(image) {
            // 文件上传前的处理逻辑
            console.log('上传数据:', image);
        }

        return {image, handleSuccess, beforeUpload}

    }
}
</script>

<style scoped>

</style>