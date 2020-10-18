import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home  from "../pages/home.vue" 
import fenlei from "../pages/fenlei.vue"
import shopcar from "../pages/shopcar.vue"
import mine from "../pages/mine.vue"


export default new Router({
  routes: [
    // {
    //   path: "/",
    //   component: () => import("../pages/home.vue")
    // },
    // {
    //   path: "/movie",
    //   component: () => import("../pages/movie.vue")
    // },
    // {
    //   path:"/movieDetail",
    //   component:()=>import("../pages/movieDetail.vue")
    // },
    // {
    //   path: "/food",
    //   component: () => import("../pages/food.vue")
    // },
    // {
    //   path:"/foodDetail",
    //   component:()=>import("../pages/foodDetail.vue")
    // },
  
    {
      path:"/login",
      component:()=>import("../pages/login.vue")

    },
    {
      path:"/register",
      component:()=>import("../pages/register.vue")

    },
    {
      path:"/index",
      component:()=>import("../pages/index.vue"),
      children: [
        { path: "home", component: home,  },
        { path: "fenlei", component: fenlei,  },
        { path: "shopcar", component: shopcar,  },
        { path: "mine", component: mine, },
        { path: "", redirect: "home" }
      ]

    },
    {
      path:"/goodsDetail",
      component:()=>import("../pages/goodsDetail.vue")

    },
    {
      path:"/treegoods",
      component:()=>import("../pages/treegoods.vue")


    },
    {
      path:"/treeDetail",
      component:()=>import("../pages/treeDetail.vue")

    }
   

  ]
})
