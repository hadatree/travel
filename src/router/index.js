import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/City'


Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        }
    ]
})

export default router;