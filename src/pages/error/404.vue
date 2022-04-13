<template>
    <div class="404">
        <el-row class="main">
            <el-col :span="24" class="text-align-center">
                <el-card class="padding-tb-100">
                    <p><i class="el-icon-warning"></i></p>
                    <p class="warning-text">{{msg}}</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: this.$route.meta.title
        }
    }
}
</script>

<style>
    .el-icon-warning{font-size: 150px;color: #F56C6C;}
    .warning-text{color: #909399;}
    .padding-tb-100{padding: 100px 0px;}
</style>