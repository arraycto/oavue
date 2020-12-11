import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
import {getMenuByRouter} from '../utils/util'
import routers from "../router/routers";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadCrumbList: [],
        access:''
    },
    getters:{
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.access),
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        user,
       /* app*/
    }
})


