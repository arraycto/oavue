<template>
    <div class="user-avator-dropdown">
        <Dropdown @on-click="handleClick">
            <Avatar :src="userAvator"/>
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: {
            userAvator: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            /*登录退出*/
            handleClick (name) {
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .user-avator-dropdown {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
    }
</style>
