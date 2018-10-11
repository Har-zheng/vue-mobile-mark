import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/Home.vue";
import Detail from './pages/detail/Detail.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: () =>
      import("./pages/city/City.vue")
    },
    {
      path: '/detail/:id',
      name: Detail,
      component: Detail
    }
  ]
});
