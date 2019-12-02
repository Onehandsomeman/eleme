import Vue from 'vue';
import VueRouter from "vue-router";

import Goods from "../components/goods/Goods";
import Header from "../components/header/Header";
import Ratings from "../components/ratings/Ratings";
import Seller from "../components/seller/Seller";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path:'/goods',component:Goods },
    { path:'/header',component:Header },
    { path:'/ratings',component:Ratings },
    { path:'/seller',component:Seller },
  ]
})
