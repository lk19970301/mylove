import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import movie from "./modules/movie"
import food from "./modules/food"

import actions from "./actions"
import {state,getters,mutations} from "./mutations"

export default new Vuex.Store({
    //state 状态
    state,
    //修改state
    mutations,
    //组件派发的动作
    actions,
    //导出数据
    getters,

    //模块
    modules:{
        movie:movie,
        food:food
    }
})