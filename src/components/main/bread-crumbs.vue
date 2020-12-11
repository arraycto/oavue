<template>
    <div class="bread-crumbs">
        <Breadcrumb :style="{fontSize: `${fontSize}px`}" separator=">">
            <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
                <Icon type="ios-home-outline"/>
                {{ item.meta.title }}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "bread-crumbs",
        props: {
            list: {
                type: Array,
                default: () => []
            },
            fontSize: {
                type: Number,
                default: 14
            },
        },
        data() {
            return {}
        },
        computed: {},
        methods: {

        },
        watch: {}
    }
</script>

<style scoped>
    .bread-crumbs{
        display: inline-block;
        vertical-align: top;
    }
</style>
