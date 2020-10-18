import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("../pages/home.vue")
    },
    {
      path: "/movie",
      component: () => import("../pages/movie.vue")
    },
    {
      path:"/movieDetail",
      component:()=>import("../pages/movieDetail.vue")
    },
    {
      path: "/food",
      component: () => import("../pages/food.vue")
    },
    {
      path:"/foodDetail",
      component:()=>import("../pages/foodDetail.vue")
    },
  ]
})
