import { reqMovie, reqMovieDetail } from "../../utils/request"

const state = {
    movies: [],//电影list
    detail: {},//电影详情
}
const mutations = {
    changeMovies(state, arr) {
        state.movies = arr;
    },
    changeDetail(state, obj) {
        state.detail = obj
    },
}
const actions = {
    requestMovie(context) {
        //缓存
        if (context.state.movies.length > 0) {
            return;
        }

        reqMovie().then(res => {
            context.commit("changeMovies", res.data.data)
        })
    },
    requestDetail(context, id) {
        //如果上一次的id和这一次要请求的id是一个id，就不要发了
        if (id === context.state.detail.id) {
            return;
        } else {
            //清空detail 
            context.commit("changeDetail", {})
        }
        reqMovieDetail(id).then(res => {
            context.commit("changeDetail", res.data.detail)
        })
    },
}
const getters = {
    movies(state) {
        return state.movies
    },
    detail(state) {
        return state.detail
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
    //命名空间
    namespaced:true
}