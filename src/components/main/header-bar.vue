<template>
    <div class="header-bar">
        <side-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange" />
        <bread-crumbs show-icon style="margin-left: 30px;" :list="breadCrumbList"/>
        <div class="custom-content-con">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SideTrigger from "./side-trigger";
    import BreadCrumbs from "./bread-crumbs";
    export default {
        name: "header-bar",
        components: {BreadCrumbs, SideTrigger},
        props: {
            collapsed: Boolean
        },
        data() {
            return {}
        },
        computed: {
            breadCrumbList () {
                return this.$store.state.breadCrumbList
            }
        },
        methods: {
            handleCollpasedChange (state) {
                this.$emit('on-coll-change', state)
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .header-bar {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .header-bar .custom-content-con {
        float: right;
        height: auto;
        padding-right: 20px;
        line-height: 64px;
    }
    .header-bar .custom-content-con > * {
        float: right;
    }
</style>
