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
    </div>
</template>

<script>
export default {
    data(){
        return {
            recommend:[
                {id: 'top1', name: '第一篇推荐文章'},
                {id: 'top2', name: '第二篇推荐文章'},
                {id: 'top3', name: '第三篇推荐文章'},
                {id: 'top4', name: '第四篇推荐文章'},
            ]
        }
    }
}
</script>

<style>
    .article-recommend{overflow: auto;}
    .article-max{height: 544px;}
    .article-line{height: 140px;}
</style>