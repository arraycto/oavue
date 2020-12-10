<template>
    <Submenu :name="`${parentName}`">
        <template v-for="item in children">
            <template v-if="item.children && item.children.length === 1 ">

            </template>

            <template v-else>

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
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
