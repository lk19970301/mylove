import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


import { reqMovie, reqMovieDetail, reqFood, reqFoodDetail, reqBanner } from "../utils/request"

export default new Vuex.Store({
    //state 状态
    state: {
    
        foodDetail: {},//外卖详情
        banner: [],
        uid:"123"

    },
    //修改state
    mutations: {
       
        // changeFoodDetail(state, obj) {
        //     state.foodDetail = obj;
        // },
        changeBanner(state,arr){
            state.banner=arr
        },
        // -------------
        changeuid(state,uid){
             state.uid=uid
        }
    },
    //组件派发的动作
    actions: {
        // requestFoodDetail(context, foodId) {
        //     if (foodId == context.state.foodDetail.foodId) {
        //         return;
        //     } else {
        //         context.commit("changeFoodDetail", {})
        //     }
        //     reqFoodDetail(foodId).then(res => {
        //         context.commit("changeFoodDetail", res.data.detail)
        //     })
        // },
        // ---------------------------
         reqAdd(context,uid){
            context.commit("changeuid",uid)

     },
    },
    //导出数据
    getters: {
        
        // foodDetail(state) {
        //     return state.foodDetail
        // },
        banner(state){
            return state.banner
        },
        uid(state){
            return state.uid
        }

    }
})