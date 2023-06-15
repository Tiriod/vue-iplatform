<template>
    <div class="container">
        <HomeBanner/>
    </div>
    <!--  主容器内容  -->
    <el-main>
        <el-row class="tac">
            <!--  主栏内容  -->
            <el-col :span="16">
                <div class="demo-image">
                    <div class="block" @click="submitImage">
                        <span class="demonstration ">上传图像</span>
                        <el-image/>
                    </div>
                    <div class="block">
                        <span class="demonstration">返回图像</span>
                        <el-image>
                            <template #error>
                                <div class="image-slot">
                                    <el-icon>
                                        <icon-picture/>
                                    </el-icon>
                                </div>
                            </template>
                        </el-image>
                    </div>
                </div>
            </el-col>
            <!--  边栏内容  -->
            <el-col :span="8">
                <el-menu active-text-color="#ffd04b"
                         background-color="#3D3D3D"
                         class="el-menu-vertical-demo"
                         default-active="2"
                         text-color="#fff"
                         @open="handleOpen"
                         @close="handleClose"
                         style="border-radius: 20px">
                    <el-sub-menu index="1">

                        <template #title>
                            <el-icon>
                                <User/>
                            </el-icon>
                            <span>用户信息</span>
                        </template>
                        <el-menu-item-group title="账号&名称">
                            <el-menu-item index="1-1">
                                <el-icon>
                                    <Document/>
                                </el-icon>
                                账号:
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <el-icon>
                                    <Postcard/>
                                </el-icon>
                                名称:
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="账户等级">
                            <el-menu-item index="1-3">
                                <el-icon>
                                    <Sugar/>
                                </el-icon>
                                账户等级:
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>
                                <el-icon>
                                    <Reading/>
                                </el-icon>
                                等级介绍
                            </template>
                            <el-menu-item index="1-4-1">
                                <el-icon>
                                    <Memo/>
                                </el-icon>
                                介绍详情:
                            </el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon>
                            <Setting/>
                        </el-icon>
                        <span>登录界面</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

    </el-main>
</template>

<script setup>
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import IconPicture from "@/App.vue";
import {Document, Memo, Postcard, Reading, Setting, Sugar, User} from "@element-plus/icons-vue";
</script>

<style scoped>

</style>