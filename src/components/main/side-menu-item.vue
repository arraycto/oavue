<template>
    <Submenu :name="`${parentName}`">
        <template slot="title">
            <Icon :type="parentItem.icon || ''" size="21"/>
            <span>{{ parentItem.meta.title }}</span>
        </template>
        <template v-for="item in children">
            <!--有且只有一个子路由-->
            <template v-if="item.children && item.children.length === 1 ">
                <!--子子路由不止一个- 递归调用-->
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"/>
                <!--子子路由只有一个-->
                <menu-item v-else :key="`menu-${item.children[0].name}`" :name="getNameOrHref(item,true)">
                    <Icon :type="item.icon"></Icon>
                    <span>{{ item.children[0].meta.title }}</span>
                </menu-item>
            </template>
            <!--子子路由0或多个--->
            <template v-else>
                <!--子子路由多个-递归调用-->
                <side-menu-item v-if="item.children && item.children.length>1" :key="`menu-${item.name}`" :parent-item="item"/>
                <!--没有子子路由---->
                <menu-item v-else :name="getNameOrHref(item,false)" :key="`menu-${item.name}`">
                    <Icon :type="item.icon"></Icon>
                    <span>{{ item.meta.title}}</span>
                </menu-item>
            </template>
        </template>
    </Submenu>
</template>

<script>
    export default {
        name: "side-menu-item",
        props: {
            parentItem: {
                type: Object,
                default: () => {}
            },
        },
        data() {
            return {}
        },
        computed: {
            parentName () {
                console.log(this.parentItem.name);
                return this.parentItem.name
            },
            children () {
                console.log(this.parentItem.children);
                return this.parentItem.children
            },
        },
        methods: {
            showChildren (item) {
                return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
            },
            getNameOrHref (item, children0) {
                return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
