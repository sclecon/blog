<template>
    <div id="Footer">
        <el-row class="main">
            <el-col :span="24">
                <span>{{icp}} <a href="javascript:;">{{url}}</a> © 2022. All rights reserved.</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'CommonFooter',
    data(){
        return {
            url: 'Element.CoM',
            icp: '蜀ICP备19036164号'
        }
    }
}
</script>

<style>
    #Footer{width: 100%;height: 40px;padding: 30px 0px;line-height: 40px;background-color: rgb(33, 35, 36);color: #eee;font-size: 14px;text-align: center;}
</style>