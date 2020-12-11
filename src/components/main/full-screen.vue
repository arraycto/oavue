<template>
    <div v-if="showFullScreenBtn" class="full-screen-btn-con">
        <Tooltip :content="value ? '退出全屏' : '全屏'" placement="bottom">
            <Icon @click.native="handleChange" :type="value ? 'md-contract' : 'md-expand'" :size="23"></Icon>
        </Tooltip>
    </div>
</template>

<script>
    export default {
        name: "full-screen",
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {
            showFullScreenBtn () {
                return window.navigator.userAgent.indexOf('MSIE') < 0
            }
        },
        methods: {
            handleChange () {
                this.handleFullscreen()
            },
            handleFullscreen () {
                let main = document.body
                if (this.value) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen()
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen()
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    }
                } else {
                    if (main.requestFullscreen) {
                        main.requestFullscreen()
                    } else if (main.mozRequestFullScreen) {
                        main.mozRequestFullScreen()
                    } else if (main.webkitRequestFullScreen) {
                        main.webkitRequestFullScreen()
                    } else if (main.msRequestFullscreen) {
                        main.msRequestFullscreen()
                    }
                }
            },
        },
        watch: {}
    }
</script>

<style scoped>
    .full-screen-btn-con .ivu-tooltip-rel{
        height: 64px;
        line-height: 56px;

    }
    .full-screen-btn-con .ivu-tooltip-rel i{
        height: 64px;
        line-height: 56px;
        cursor: pointer;
    }
</style>
