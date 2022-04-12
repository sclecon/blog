<template>
    <div id="app">
        <div id="login" v-if="login">
            <span>显示登录页面</span>
        </div>
        <el-container v-else>
            <el-header :height="header.height" :style="header.style">
                <CommonHeader></CommonHeader>
            </el-header>
            <el-main>
                <span>主要内容区域</span>
            </el-main>
            <el-footer>
                <CommonFooter></CommonFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import './static/css/common.css';
import CommonHeader from './components/common/header.vue';
import CommonFooter from './components/common/footer.vue';
export default {
    name: 'App',
    components: {
        CommonHeader,
        CommonFooter
    },
    data(){
        return {
            header: {
                height: 'auto',
                style: 'padding:0px;',
            },
            login: false
        }
    },
    methods: {
        msg() {
            this.$message.success('欢迎使用element的UI组件包');
        }
    }
}
</script>

<style>

</style>
