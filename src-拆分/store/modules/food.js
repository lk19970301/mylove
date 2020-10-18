import {  reqFood,reqFoodDetail } from "../../utils/request"
const state = {
    foodList: [],//外卖list
    foodDetail: {},//外卖详情
}

const mutations = {
    //修改外卖list
    changeFoodList(state, arr) {
        state.foodList = arr
    },
    changeFoodDetail(state, obj) {
        state.foodDetail = obj;
    }
}

const actions = {
    //组件触发发起获取外卖list的请求
    requestFoodList(context) {
        //缓存
        if (context.state.foodList.length > 0) {
            return;
        }
        reqFood().then(res => {
            context.commit("changeFoodList", res.data.data)
        })
    },
    requestFoodDetail(context, foodId) {
        if (foodId == context.state.foodDetail.foodId) {
            return;
        } else {
            context.commit("changeFoodDetail", {})
        }
        reqFoodDetail(foodId).then(res => {
            context.commit("changeFoodDetail", res.data.detail)
        })
    }
}

const getters = {
    foodList(state) {
        return state.foodList
    },
    foodDetail(state) {
        return state.foodDetail
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}