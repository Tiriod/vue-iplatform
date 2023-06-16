<template>
    <div class="card-container">
        <!--ChatGPT卡片-->
        <el-card class="card-item" header="🚀OpenAI: GPT-3.5 模型的聊天型语言模型 ">
            <div style="display: flex">
                <el-link href="https://chat.openai.com/" style="text-decoration: none;">
                    <el-image style="width: 200px; height: 200px" :src="chatgpt_image_path"/>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                        ChatGPT可以用于多种用途,包括回答问题,提供解决方案,进行对话,生成文本等.它可以接收文本输入并生成连贯,合乎上下文的回复.它能够处理各种类型的问题,从一般知识查询到具体领域的问题.
                    </el-text>
                </el-card>
            </div>
        </el-card>
        <!--AI Art Generator卡片-->
        <el-card class="card-item" header="🎨Cutout.pro | AI Art Generator(人工智能艺术生成器)">
            <div style="display: flex">
                <el-link href="https://www.cutout.pro/zh-CN/ai-art-generation">
                    <el-image style="width: 200px; height: 200px" :src="cutout_image_path"/>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                        AI Art Generator(人工智能艺术生成器),用最好的 AI 艺术生成器释放你的创造力!用我们的免费在线工具毫不费力地创造出令人惊叹和独特的艺术作品.
                    </el-text>
                </el-card>
            </div>
        </el-card>
        <!--Hugging Face卡片-->
        <el-card class="card-item" header="🤗Hugging Face | AI 模 型 开 源 社 区">
            <div style="display:flex;">
                <el-link href="https://huggingface.co/chat/">
                    <el-image style="width: 200px;height: 200px;" :src="huggingchat_image_path"></el-image>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                        Hugging Face Hub,允许用户共享和发现预训练模型,数据集和其他资源.它作为NLP社区的协作空间,促进了思想交流,使研究人员和开发人员能够利用集体的知识和专业知识.
                    </el-text>
                </el-card>
            </div>
        </el-card>
    </div>
    <div style="padding: 5px"></div>
    <div class="card-container">
        <!--Roboflow卡片-->
        <el-card class="card-item" header="🌈Roboflow">
            <div style="display:flex;">
                <el-link href="https://huggingface.co/chat/">
                    <el-image style="width: 200px;height: 200px;" :src="roboflow_image_path"></el-image>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                        Roboflow:Everything you need to build and deploy computer vision models
                        Used by over 250,000 engineers to create datasets, train models, and deploy to production.
                    </el-text>
                </el-card>
            </div>
        </el-card>
        <!--Github -->
        <el-card class="card-item" header="😋一个 Vue 3 UI 框架 | Element Plus">
            <div style="display:flex;">
                <el-link href="https://huggingface.co/chat/">
                    <el-image style="width: 200px;height: 200px;" :src="huggingchat_image_path"></el-image>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                    </el-text>
                </el-card>
            </div>
        </el-card>
        <el-card class="card-item" header="Card 3">
            <div style="display:flex;">
                <el-link href="https://huggingface.co/chat/">
                    <el-image style="width: 200px;height: 200px;" :src="huggingchat_image_path"></el-image>
                </el-link>
                <el-card style="margin: 0 15px;background-color: #EFEFEF;">
                    <el-text class="mx-4">
                    </el-text>
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    // 组件逻辑
    name: "cardView",
    setup() {
        const chatgpt_image_path = "src/resources/image/ChatGPT.png"
        const cutout_image_path = "src/resources/image/Cutout.png"
        const huggingchat_image_path = "src/resources/image/Hugging face.png"
        const roboflow_image_path = "src/resources/image/Roboflow.svg"
        return {
            chatgpt_image_path,
            cutout_image_path,
            huggingchat_image_path,
            roboflow_image_path,
        }
    }
}
</script>

<style>
.card-container {
    display: flex;
}

.card-item {
    flex: 1;
    margin-right: 10px;
}

.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}

.demo-image .block:last-child {
    border-right: none;
}

.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>

