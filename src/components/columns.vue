<template>
    <div class="columns">
        <el-row>
            <el-col :span="18">
                <i :class="icon" v-if="typeof icon === 'string'" class="columns-icon"></i>
                <span class="columns-title">{{title}}</span>
                <span class="columns-stat" v-if="stat !== false">({{stat}})</span>
                <ul class="navs" v-if="typeof navs === 'object'">
                    <li v-for="(nav,index) in navs" :key="index" v-show="typeof nav.name === 'string'">
                        <router-link :to="nav.to" exact v-if="typeof nav.to !== 'undefined'">{{nav.name}}</router-link>
                        <a href="javascript:;" :class="nav.default ? 'active' : ''" @click="toggle(index)" v-else-if="typeof nav.default !== 'undefined' && nav.value !== 'undefined'">{{nav.name}}</a>
                    </li>
                </ul>
            </el-col>

                <slot></slot>
            <el-col :span="6" class="text-align-right" v-if="typeof more === 'object'">
                <router-link :to="more.to" exact v-if="(typeof more.to === 'string' || typeof more.to === 'object') && typeof more.name === 'string'" class="more">{{more.name}}</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props: {
        title: {
            type: String,
            default: '分栏标题'
        },
        icon: {
            type: [String, Boolean],
            default: false
        },
        more: {
            type: [Object, Boolean],
            default: false,
        },
        navs: {
            type: [Array, Object, Boolean],
            default: () => {
                return []
            }
        },
        callback: {
            type: [String, Boolean],
            default: false,
        },
        stat: {
            type: [Number, Boolean],
            default: false,
        }
    },
    methods: {
        toggle(key){
            for(var index in this.navs) {
                this.navs[index].default = false;
            }
            if(typeof this.navs[key].default === 'boolean'){
                this.navs[key].default = true;
                if(typeof this.callback === 'string' && this.callback.length) {
                    this.$emit(this.callback, this.navs[key].value);
                }
            }
            
        }
    },
    mounted(){
        
    }
}
</script>

<style>
    .columns{padding: 20px 0px;line-height: 40px;height: 40px;overflow: hidden;}
    .columns .columns-icon{font-size: 30px;padding-right: 10px;}
    .columns .columns-title{font-size: 26px;font-weight: 500;}
    .columns .more{font-size: 16px;}
    .columns ul.navs{display: inline-block;margin:0px;}
    .columns ul.navs li{display: initial;padding: 10px;font-size: 14px;}
    .columns span.columns-stat{color: #ddd;font-size: 14px;padding-left: 5px;}
</style>