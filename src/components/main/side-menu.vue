<template>
    <div class="side-menu">
        <slot></slot>
        <Menu v-show="!collapsed" :active-name="activeName" width="auto" :open-names="openedNames" accordion>
            <template v-for="item in menuList">
                <!--如果子路由只有一个-->
                <template v-if="item.children && item.children.length===1">
                    <menu-item>

                    </menu-item>
                </template>
                <!--子路由0或多个-->
                <template v-else>

                    <menu-item>

                    </menu-item>
                </template>
            </template>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "side-menu",
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
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
