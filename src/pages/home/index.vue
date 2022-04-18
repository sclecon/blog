<template>
    <div id="index">
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
            <el-col :span="24" class="margin-top-30 text-align-center">
                <el-row :gutter="30">
                    <el-col :span="6" :style="'line-height:'+card.height" v-for="index in 4" :key="index">
                        <el-card :style="'height:'+card.height">卡片{{index}}</el-card>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="24" class="margin-top-20">
                <columns 
                    :title="apps.title" 
                    :icon="apps.icon" 
                    :more="apps.more" 
                    :navs="apps.navs" 
                    :callback="apps.callback" 
                    @appsNavClick="appsNavClick"
                ></columns>
            </el-col>
            <el-col :span="24">
                <el-row :gutter="20">
                    <el-col :span="4" :style="'line-height:'+card.height" v-for="index in 12" :key="index" class="margin-top-20">
                        <el-card :style="'height:'+card.height" class="text-align-center padding-tb-100">软件：{{index}}</el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="article margin-top-30">
            <el-row class="main">
                <columns 
                    :title="articles.title" 
                    :icon="articles.icon" 
                    :more="articles.more" 
                    :navs="articles.navs" 
                    :callback="articles.callback" 
                    @articlesNavClick="articlesNavClick"
                ></columns>
            </el-row>
            <div class="main">
                <el-row :gutter="30" class="margin-top--10 padding-bottom-30">
                    <el-col :span="12" v-for="index in 6" :key="index" class="margin-top-30">
                        <el-card class="padding-tb-50 padding-lr-20">
                            这是文章列表页内容
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
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
            apps: {
                title: '精品软件',
                icon: 'el-icon-apple',
                more: {name: '更多软件 》', to: {name:'user_login'}},
                navs: [
                    {name: '最新发布', value: 1, default: true},
                    {name: '热门下载', value: 2, default: false},
                    {name: '文章列表', to: {name: 'article_list'}},
                    {name: '404错误', to: {name: 'not_found'}, default: false},
                ],
                callback: 'appsNavClick',
            },
            articles: {
                title: '教程文章',
                icon: 'el-icon-apple',
                more: {name: '更多文章 》', to: {name:'user_login'}},
                navs: [
                    {name: '新鲜发布', value: 1, default: true},
                    {name: '站长推荐', value: 2, default: false},
                    {name: '最多评论', value: 3, default: false},
                ],
                callback: 'articlesNavClick',
            }
        }
    },
    methods: {
        appsNavClick(value){
            this.$message.success('修改精品软件的内容'+value);
        },
        articlesNavClick(value){
            this.$message.success('修改教程文章的内容'+value);
        }
    }
}
</script>

<style>
    .article{min-height: 100px;background-color: #111111;margin-bottom: -25px;}
</style>