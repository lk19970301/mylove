import Vue from "vue"
import goBack from "./goBack"
import toSearch from "./toSearch"
import vToast from "./toast"
import tabBar from "./tabBar"
// Vue.component("goBack",goBack)
// Vue.component("toSearch",toSearch)

let obj = {
    goBack,
    toSearch,
    vToast,
    tabBar
}

for(let i in obj){
    Vue.component(i,obj[i])
}


