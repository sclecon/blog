<template>
    <div id="app">
        <el-container>
            <el-header :height="header.height" :style="header.style">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer :height="footer.height" :style="footer.style">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
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
            }
        }
    }
}
</script>

<style>

</style>
