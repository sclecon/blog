<template>
    <div id="topNav">
        <el-row class="main">
            <el-col :span="5" class="logo">
                <span><i class="el-icon-eleme logo-icon active"></i></span>
                <span class="logo-text">Element Theme</span>
            </el-col>
            <el-col :span="13">
                <ul class="navs">
                    <li v-for="(item, index) in navs" :key="index"><router-link :to="item.to" exact>{{item.name}}</router-link></li>
                </ul>
            </el-col>
            <el-col :span="6" class="text-align-right">
                <SearchInput></SearchInput>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SearchInput from './search.vue';
export default {
    name: 'TopNav',
    components: {
        SearchInput
    },
    data(){
        return {
            navs: [
                {to: {name: 'index'}, name: '首页'},
                {to: {name: 'article_list'}, name: '文章'},
                {to: {name: 'user_login'}, name: '登录'},
                {to: {name: 'not'}, name: '404'},
            ]
        }
    }
}
</script>

<style>
    #topNav{height: 60px;background-color: rgb(33, 35, 36);color: white;line-height: 60px;font-size: 16px;}
    #topNav .logo{cursor: pointer;}
    #topNav .logo .logo-icon{font-size: 40px;vertical-align: middle;margin-top: -10px;}
    #topNav .logo .logo-text{margin-left: 5px;font-size: 20px;}
    #topNav .navs{margin: 0px;padding: 0px;}
    #topNav .navs li{display: initial;padding: 20px;font-weight: 500;font-size: 15px;}
</style>