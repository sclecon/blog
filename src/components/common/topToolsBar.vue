<template>
    <div id="topToolsBar">
        <el-row class="main">
            <el-col :span="12">
                <ul class="line-ul-nav">
                    <li><a href="javascript:;">装机必备</a></li>
                    <li><a href="javascript:;">提交应用</a></li>
                    <li><a href="javascript:;">留言反馈</a></li>
                    <li><a href="javascript:;">macOS12兼容性</a></li>
                </ul>
            </el-col>
            <el-col :span="12" class="text-align-right">
                <ul class="line-ul-nav line-ul-nav-right">
                    <li><a href="javascript:;">动画</a></li>
                    <li><a href="javascript:;">明亮</a></li>
                    <li><a href="javascript:;">复古</a></li>
                    <li><a href="javascript:;">护眼</a></li>
                    <li><a href="javascript:;">海天</a></li>
                    <li><a href="javascript:;">深邃</a></li>
                    <li><a href="javascript:;">暗黑</a></li>
                    <li><a href="javascript:;">自动</a></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'TopToolsBar'
}
</script>

<style>
    #topToolsBar{width: 100%;height: 40px;color: #fcfcfc;background-color: rgb(15, 15, 15);line-height: 40px;font-size: 12px;}
    #topToolsBar ul.line-ul-nav{margin: 0px;padding: 0px;}
    #topToolsBar ul.line-ul-nav li{display: initial;padding-right: 25px;}
    #topToolsBar ul.line-ul-nav-right li{padding-right: 0px!important;padding-left: 15px;}
</style>