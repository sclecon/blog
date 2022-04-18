<template>
    <div class="main">
        <div class="article-recommend" v-if="recommend">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card class="padding-tb-20 padding-lr-20 radius-max article-max">{{recommend[0].name}}</el-card>
                </el-col>
                <el-col :span="12">
                    <div class="article-line1" v-for="(item, index) in recommend" :key="index">
                        <el-card class="padding-tb-20 padding-lr-20 radius-max article-line" :class="index == 3 ? '' : 'margin-bottom-20'" v-if="index && index < 4">{{item.name}}</el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="article-list margin-top-20">
            <el-row :gutter="30">
                <el-col :span="16">
                    <columns 
                        :title="articles.title" 
                        :stat="articles.stat"
                        :icon="articles.icon" 
                        :navs="articles.navs" 
                        :callback="articles.callback" 
                        @articlesNavClick="articlesNavClick"
                    ></columns>
                    <div class="article-item margin-bottom-20" v-for="index in 10" :key="index">
                        <el-card class="padding-tb-20 padding-lr-20 radius-max article-line">这是第{{index}}个文章数据</el-card>
                    </div>
                </el-col>
                <el-col :span="8">
                    <columns :title="reply.title"></columns>
                    <div class="reply-item margin-bottom-20" v-for="index in 10" :key="index">
                        <el-card class="padding-tb-20 padding-lr-20 radius-max article-line">这是第{{index}}个文章数据</el-card>
                    </div>
                </el-col>
            </el-row>
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
            recommend:[
                {id: 'top1', name: '第一篇推荐文章'},
                {id: 'top2', name: '第二篇推荐文章'},
                {id: 'top3', name: '第三篇推荐文章'},
                {id: 'top4', name: '第四篇推荐文章'},
            ],
            articles: {
                title: '全部文章',
                stat: 64,
                icon: 'el-icon-apple',
                navs: [
                    {name: '全部文章', value: 1, default: true},
                    {name: '新手入门', value: 2, default: false},
                    {name: '软件教程', value: 3, default: false},
                    {name: '新闻资讯', value: 3, default: false},
                ],
                callback: 'articlesNavClick',
            },
            reply: {
                title: '最新评论'
            }
        }
    },
    methods: {
        articlesNavClick(value){
            this.$message.success('获取到全部文章分类筛选'+value);
        }
    }
}
</script>

<style>
    .article-recommend{overflow: auto;}
    .article-max{height: 544px;}
    .article-line{height: 140px;}
</style>