import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/home",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ "../component/home.vue")
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location: RawLocation):Promise<Route> {
//   return originalPush.catch((err: any) => err);
// };
export default router;
