import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import Login from "../views/Login";
import personMgr from "../views/personMgr";
import routers from "./routers";
Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '',
            redirect: 'login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
    ],
    routers
})
