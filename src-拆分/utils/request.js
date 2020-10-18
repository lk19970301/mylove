import axios from "axios"
axios.interceptors.response.use(res => {
    console.log("本次请求地址是：" + res.config.url);
    console.log(res);
    return res;
})

let baseUrl = "/api"

export const reqMovie = () => {
    return axios({
        url: baseUrl + "/movie"
    })
}

export const reqMovieDetail = (id) => {
    return axios({
        url: baseUrl + "/getMovieDetail",
        params:{
            id:id
        }
    })
}

export const reqFood = () => {
    return axios({
        url: baseUrl + "/foodList"
    })
}

export const reqFoodDetail = (id) => {
    return axios({
        url: baseUrl + "/getFoodDetail",
        params:{
            foodId:id
        }
    })
}
