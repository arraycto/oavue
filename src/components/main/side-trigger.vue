<template>
    <a @click="handleChange" type="text" :class="['side-trigger-a', collapsed ? 'collapsed' : '']">
        <Icon :type="icon" :size="26" />
    </a>
</template>

<script>
    export default {
        name: "side-trigger",
        props: {
            collapsed: Boolean,
            icon: {
                type: String,
                default: 'navicon-round'
            },
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            handleChange () {
                console.log(this.collapsed);
                this.$emit('on-change', !this.collapsed)
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .trans {
        transition: transform 0.2s ease;
    }
    .side-trigger-a {
        padding: 6px;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        color: #5c6b77;
        margin-top: 12px;
    }
    .side-trigger-a i {
        transition: transform 0.2s ease;
        vertical-align: top;
    }
    .side-trigger-a.collapsed i {
        transform: rotateZ(90deg);
        transition: transform 0.2s ease;
    }
</style>
