<template>
    <div id="header">
        <TopToolsBar></TopToolsBar>
        <TopNav></TopNav>
    </div>
</template>

<script>
import TopToolsBar from '../header/topToolsBar.vue';
import TopNav from '../header/topNav.vue';

export default {
    name: 'Header',
    components: {
        TopToolsBar,
        TopNav
    }
}
</script>

<style>
    .top{background-color: red;height: 40px;width: 100%;}
</style>