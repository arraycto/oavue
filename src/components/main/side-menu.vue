<template>
    <div class="side-menu">
        <slot></slot>
        <Menu v-show="!collapsed" :active-name="activeName" width="auto" :open-names="openedNames" accordion>
            <template v-for="item in menuList">
                <!--如果子路由只有一个-->
                <template v-if="item.children && item.children.length===1">
                    <!--子子路由多个-->
                    <side-menu-item v-if="item.children && item.children.length>1" :key="`menu-${item.name}`" :parent-item="item"/>
                    <!--子子路由0个-->
                    <menu-item v-else :key="`menu-${item.children[0].name}`" :name="getNameOrHref(item,true)">
                        <Icon :type="item.icon"></Icon>
                        <span>{{ item.children[0].meta.title }}</span>
                    </menu-item>
                </template>
                <!--子路由0或多个-->
                <template v-else>
                    <!---子路由多个-->
                    <side-menu-item v-if="item.children && item.children.length>1" :key="`menu-${item.name}`" :parent-item="item"/>
                    <!--没有子路由-->
                    <menu-item v-else :name="getNameOrHref(item,false)" :key="`menu-${item.name}`">
                        <Icon :type="item.icon"></Icon>
                        <span>{{ item.meta.title}}</span>
                    </menu-item>
                </template>
            </template>
        </Menu>
    </div>
</template>

<script>
    import SideMenuItem from "./side-menu-item";
    export default {
        name: "side-menu",
        components: {SideMenuItem},
        props: {
            menuList: {
                type: Array,
                default() {
                    return []
                }
            },
            collapsed: {
                type: Boolean
            },
            activeName:{
                type: String,
                default:''
            },
            openNames: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                openedNames: []
            }
        },
        computed: {
            children () {
                console.log(this.parentItem);
                return this.parentItem.children
            },

        },
        methods: {
            getNameOrHref (item, children0) {
                return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
