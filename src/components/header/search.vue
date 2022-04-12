<template>
    <div class="searchInput">
        <el-input
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            v-model="search">
        </el-input>
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    data(){
        return {
            search: ''
        }
    }
}
</script>

<style>
    .searchInput{width: 100%;}
    .searchInput .el-input__inner{background-color: unset;border:1px solid #434343;border-radius: 20px;color: white;font-size: 14px;}
    .searchInput .el-input__icon{font-size: 16px;}
</style>