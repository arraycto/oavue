<template>
    <Layout class="main">
        <Sider collapsible :width="200"
               :collapsed-width="64"
               :collapsible="collapsible"
               v-model="collapsible"
               :style="{overflow: 'hidden'}"
               hide-trigger
               class="left-side">
            <side-menu :active-name="$route.name" :collapsed="collapsible" :menu-list="menuList"></side-menu>
        </Sider>
    </Layout>
</template>

<script>
    import SideMenu from "../components/main/side-menu";
    export default {
        name: "Home",
        components: {SideMenu},
        props: {},
        data() {
            return {
                collapsible:false
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
