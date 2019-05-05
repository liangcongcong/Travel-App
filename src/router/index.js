import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('@/components/home/home.vue')
        },
        {
            path: '/city',
            name: 'City',
            component: ()=> import('@/components/pages/city/City.vue')
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component:()=> import('@/components/pages/detail/Detail.vue')
        }

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})