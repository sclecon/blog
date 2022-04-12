<template>
    <div id="app">
        <el-container>
            <el-header :height="header.height" :style="header.style"  v-if="layout">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer :height="footer.height" :style="footer.style"  v-if="layout">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import './static/css/common.css';
import Header from './components/common/header.vue';
import Footer from './components/common/footer.vue';
export default {
    name: 'App',
    components: {
        Header,
        Footer
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
        },
        gotoLogin(){
            this.$message.success('跳转按钮');
        }
    },
    mounted(){
        console.log(this.layout);
    }
}
</script>

<style>

</style>
