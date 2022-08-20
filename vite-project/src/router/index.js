import {createRouter,createWebHistory} from "vue-router";
import intruduction from "../components/introduction.vue";
import welcome from '../components/welcome.vue'
import code from '../components/code.vue'
const routes = [
    {
    path: "/introduction",
    component: intruduction
    },
    {
        path: "/welcome",
        component: welcome
        
        },
        {
            path: "/code",
            component: code
            
            }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;
