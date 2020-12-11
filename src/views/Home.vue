<template>
    <Layout class="main">
        <Sider collapsible :width="200"
               :collapsed-width="64"
               :collapsible="collapsed"
               v-model="collapsed"
               :style="{overflow: 'hidden'}"
               hide-trigger
               class="left-side">
            <side-menu :active-name="$route.name" :collapsed="collapsed" :menu-list="menuList">
                <!--用户信息放入插槽-->
                <div class="logo-con">
                    <Avatar icon="ios-person" size="large" />
                </div>
            </side-menu>
        </Sider>
        <Layout>
            <Header class="header-con">
                <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                    <user :user-avator="userAvator"/>
                    <full-screen v-model="isFullscreen" style="margin-right: 10px;"></full-screen>
                </header-bar>
            </Header>
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                    </div>
                </Layout>
                <Content class="content-wrapper">
                    <keep-alive >
                        <router-view/>
                    </keep-alive>
                </Content>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import SideMenu from "../components/main/side-menu";
    import HeaderBar from "../components/main/header-bar";
    import User from "../components/main/user";
    import FullScreen from "../components/main/full-screen";
    export default {
        name: "Home",
        components: {FullScreen, User, HeaderBar, SideMenu},
        props: {},
        data() {
            return {
                collapsed:false,
                isFullscreen: false
            }
        },
        computed: {
            menuList () {
                console.log(this.$store.getters.menuList);
                return this.$store.getters.menuList
            },
            userAvator () {
                /*用户头像*/
                return this.$store.state.user.avatorImgPath
            }
        },
        methods: {
            handleCollapsedChange (state) {
                this.collapsed = state
            },
        },
        watch: {}
    }
</script>

<style scoped>
    .main .left-sider .ivu-layout-sider-children {
        overflow-y: scroll;
        margin-right: -18px;
    }
    .main .logo-con {
        height: 64px;
        padding: 10px;
    }
    .main .logo-con img {
        height: 44px;
        width: auto;
        display: block;
        margin: 0 auto;
    }
    .main .header-con {
        background: #fff;
        padding: 0 20px;
        width: 100%;
    }
    .main  .main-content-con {
        height: calc(100% - 60px);
        overflow: hidden;
    }
    .main .tag-nav-wrapper {
        padding: 0;
        height: 40px;
        background: #F0F0F0;
    }
    .main .content-wrapper {
        padding: 18px;
        height: calc(100% - 80px);
        overflow: auto;
    }
    .main{
        height: 100%;
    }
</style>
