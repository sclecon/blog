<template>
    <div id="login">
        <el-row :gutter="30">
            <el-col :span="24">
                <div class="text-align-center margin-top-150 logo padding-lr-20">
                    <span>Element Theme</span>
                </div>
                <div class="text-align-center margin-top-30 intro padding-lr-20">
                    <span>登录Element Theme，与14万+名设计创意人一起分享快乐吧！</span>
                </div>
                <el-card class="padding-tb-20 padding-lr-20 login-box">
                    <el-menu mode="horizontal" :default-active="type" @select="changeMenu">
                        <el-menu-item index="1">登录</el-menu-item>
                        <el-menu-item index="2">注册</el-menu-item>
                    </el-menu>
                    <div class="login-form">
                        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" class="margin-top-20" v-model="user"></el-input>
                        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" type="password" class="margin-top-20" v-model="pass"></el-input>
                        <el-button type="primary" class="margin-top-30 submit-botton" v-if="type == 1">立即登录</el-button>
                        <el-button type="primary" class="margin-top-30 submit-botton" v-if="type == 2">立即注册</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: '',
            pass: '',
            type: "1",
        }
    },
    methods: {
        changeMenu(index){
            this.type = index;
        }
    }
}
</script>

<style>
    #login .logo{font-size: 40px;font-weight: 500;}
    .login-box{max-width: 400px;margin: 50px auto 0px;padding-top: 0px;}
    .el-menu{background-color: unset;}
    .el-menu.el-menu--horizontal{border-bottom: 1px solid #484848;}
    .el-menu--horizontal>.el-menu-item.is-active{color: white;border-color: rgb(143, 255, 255);}
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{color: rgb(143, 255, 255);background-color: unset;}
    .el-input__inner{background-color: unset;border-color: #3b3b3b;height: 50px;font-size: 16px;color: #e5e5e5;}
    .el-input__inner::placeholder,.el-input__prefix, .el-input__suffix{color: #555555;}
    .submit-botton{width: 100%;}
</style>