<template>
    <div id="header">
        <TopToolsBar></TopToolsBar>
        <TopNav></TopNav>
    </div>
</template>

<script>
import TopToolsBar from './topToolsBar.vue';
import TopNav from './topNav.vue';

export default {
    name: 'CommonHeader',
    components: {
        TopToolsBar,
        TopNav
    }
}
</script>

<style>
    .top{background-color: red;height: 40px;width: 100%;}
</style>