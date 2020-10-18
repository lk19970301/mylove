import axios from "axios"
import url from "postcss-url";
axios.interceptors.response.use(res => {
    console.log("本次请求地址是：" + res.config.url);
    console.log(res);
    return res;
})

let baseUrl = "/api"
// 模板
export const reqMovie = () => {
    return axios({
        url: baseUrl + "/movie"
    })
}
export const reqRegister = (phone,nickname,password)=>{
    return axios({
        url:baseUrl+"/api/register",
        method: "post",
        data:{
        phone:phone,
        nickname:nickname,
        password:password
        }
    })
}
export const reqLogin = (phone,password)=>{
    return axios({
        url:baseUrl+"/api/login",
        method:"post",
        data:{
        phone:phone,
        password:password

        }
    })
}
export const reqBanner=()=>{
    return axios({
        url:baseUrl+"/api/getbanner",
       
        
    })
}
export const reqSeckill=()=>{
   return axios({
       url:baseUrl+"/api/getseckill"
   })
}
export const reqGoods = ()=>{
    return axios({
        url:baseUrl+"/api/getindexgoods"
    })
}
export const reqGoodsDetail = (id)=>{
    return axios({
        url:baseUrl+"/api/getgoodsinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
export const reqGetcatetree  = ()=>{
    return axios({
        url:baseUrl+"/api/getcatetree",
        
    })
}
export const reqTreegoods =(id)=>{
    return axios({
        url:baseUrl+"/api/getgoods",
        method:"get",
        params: {
            fid: id
        }

    })
}
export const reqCartadd = (uid,goodsid,num)=>{
    return axios({
        url:baseUrl+"/api/cartadd",
        method:"post",
        data:{
            uid:uid,
            goodsid:goodsid,
            num:num
        }
    })
}
export const reqCartlist = (uid)=>{
    return axios({
        url:baseUrl+"/api/cartlist",
        method:"get",
        params:{
            uid:uid
        }
    })
}

export const reqCartedit =(id,type)=>{
    return axios({
        url:baseUrl+"/api/cartedit",
        method:"post",
        data:{
        id:id,
        type:type
        }
    })
}
export const reqCartdel=(id)=>{
    return axios({
        url:baseUrl+"/api/cartdelete",
        method:"post",
        data:{
            id:id
        }

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
