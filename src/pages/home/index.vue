<template>
    <el-row class="main">
        <el-col :span="24">
            <el-card>
                <el-carousel :interval="5000" arrow="always" :height="carousel.height">
                    <el-carousel-item v-for="item in 4" :key="item" class="text-align-center" :style="'line-height:'+carousel.height">
                        <h1>这是第 {{ item }} 页的展示</h1>
                    </el-carousel-item>
                </el-carousel>
            </el-card>
        </el-col>
        <el-col :span="24" class="margin-top-20 text-align-center">
            <el-row :gutter="20">
                <el-col :span="6" :style="'line-height:'+card.height">
                    <el-card :style="'height:'+card.height">卡片1</el-card>
                </el-col>
                <el-col :span="6" :style="'line-height:'+card.height">
                    <el-card :style="'height:'+card.height">卡片2</el-card>
                </el-col>
                <el-col :span="6" :style="'line-height:'+card.height">
                    <el-card :style="'height:'+card.height">卡片3</el-card>
                </el-col>
                <el-col :span="6" :style="'line-height:'+card.height">
                    <el-card :style="'height:'+card.height">卡片4</el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="24" class="margin-top-20">
            <columns :title="columns.title" :icon="columns.icon" :more="columns.more" :navs="columns.navs" :callback="columns.callback"></columns>
        </el-col>
    </el-row>
</template>

<script>
import columns from '@/components/columns.vue';
export default {
    components: {
        columns
    },
    data(){
        return {
            carousel: {
                height: '400px'
            },
            card: {
                height: '80px'
            },
            columns: {
                title: '精品软件',
                icon: 'el-icon-apple',
                more: {
                    name: '查看更多', 
                    to: {
                        name:'user_login'
                    }
                },
                navs: [
                    {name: '最新发布', value: 1, default: true},
                    {name: '热门下载', value: 2, default: false},
                    {name: '站长推荐', value: 3, default: false},
                    {name: '最多评论', value: 4, default: false}
                ],
                callback(value){
                    console.log(this.$refs);
                    console.log('切换菜单获取到值变化', value);
                }
            }
        }
    }
}
</script>

<style>
    .carousel h1{margin: unset;margin-block: unset;}
</style>