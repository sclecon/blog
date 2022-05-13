<template>
    <div class="app-item padding-tb-30 padding-lr-30">
        <img :src="app.icon" :alt="app.name" class="icon">
        <p>{{app.version}}</p>
        <h1>{{app.name}}</h1>
        <p>{{app.intro}}</p>
        <p><i class="el-icon-right"></i></p>
    </div>
</template>

<script>
export default {
    name: 'appItem',
    data(){
        return {
            app: {
                icon: 'https://static.facebstore.com/public/uploads/_/originals/scapple-1.png',
                version: 'v1.0',
                name: 'Artstudio Pro',
                intro: '绘画和照片编辑应用'
            }
        }
    }
}
</script>

<style>
    .app-item{overflow: hidden;}
    .app-item .icon{width: 60px;}
    .app-item p{color:#606266;margin-bottom: 0px;}
    .app-item h1{margin-top: 10px;}
    .app-item i{transform: scale(4, 1);margin-left: 15px;}
</style>