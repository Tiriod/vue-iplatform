<template>
    <el-image :src="container_image_path">
    </el-image>

</template>

<script>
export default {
    name: "ClassificationBanner",
    setup() {
        const container_image_path = "src/resources/image/Wild Lotus.jpeg"
        return {
            container_image_path
        }
    }
}
</script>

<style scoped>

</style>