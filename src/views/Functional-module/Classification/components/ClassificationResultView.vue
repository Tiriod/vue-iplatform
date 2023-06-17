<template>
    <el-table :data="tableData" style="width: 100%; height: 300px;border-radius: 10px;padding: 5px">
        <el-table-column fixed prop="serial_number" label="序号" width="40"/>
        <el-table-column prop="name" label="检测结果" width="100" />
        <el-table-column prop="confidence" label="置信度" width="100" />
        <el-table-column prop="city" label="City" width="100"/>
        <el-table-column prop="address" label="Address" width="100"/>
        <el-table-column prop="zip" label="Zip" width="100"/>
    </el-table>
</template>

<script lang="ts">
export default {
    name: "ClassificationResultView",
    setup() {
        const tableData = [
            {
                serial_number: '1',
                name: '玫瑰花',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                serial_number: '2',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
        ]
        return {
            tableData
        }
    }
}
</script>
<style>
.el-table {

}
</style>
