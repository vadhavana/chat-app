import Vue from "vue";
import Router from "vue-router";
import Chat from "../components/Chat.vue";
import Login from "../components/Login.vue";
import Test from "../components/Test.vue";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    redirect:'login',
    // base:"http://localhost:8080/",
    routes:[
        {
            path:'/',
            name:'home',
            component:Chat
        },
        {
            path:'/test',
            name:'test',
            component:Test
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
});
export default router;
