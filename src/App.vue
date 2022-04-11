<template>
    <div id="app">
        <el-container>
            <BlogHeader></BlogHeader>
            <el-main>
                <el-button @click="msg" type="success">点我</el-button>
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-main>
            <BlogFooter></BlogFooter>
        </el-container>
    </div>
</template>

<script>
import BlogHeader from './components/common/header.vue';
import BlogFooter from './components/common/footer.vue';
export default {
    name: 'App',
    components: {
        BlogHeader,
        BlogFooter
    },
    methods: {
        msg() {
            this.$message.success('欢迎使用element的UI组件包');
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel{margin-top: 100px;}
</style>
