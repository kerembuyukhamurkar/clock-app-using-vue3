import Home from "./views/homePage.vue"
import Stopwatch from "./views/stopwatchPage.vue"
import Countdown  from "./views/countdownPage.vue"
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/stopwatch",
        name:"stopwatch",
        component:Stopwatch


    },
    {
        path:"/countdown",
        name:"countdown",
        component:Countdown


    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes

})
export default router;