<template>
    <div id="app">
        <div id="login" v-if="login">
            <CommonLogin></CommonLogin>
        </div>
        <el-container v-else>
            <el-header :height="header.height" :style="header.style">
                <CommonHeader></CommonHeader>
            </el-header>
            <el-main>
                <span>主要内容区域</span>
            </el-main>
            <el-footer :height="footer.height" :style="footer.style">
                <CommonFooter></CommonFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import './static/css/common.css';
import CommonHeader from './components/common/header.vue';
import CommonFooter from './components/common/footer.vue';
import CommonLogin from './pages/user/login.vue';
export default {
    name: 'App',
    components: {
        CommonHeader,
        CommonFooter,
        CommonLogin
    },
    data(){
        return {
            header: {
                height: 'auto',
                style: 'padding:0px;',
            },
            footer: {
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
