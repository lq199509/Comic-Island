import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: () => import('./views/home.vue') },
        { path: '/logins', component: () => import('./views/logins.vue') },
        { path: '/register', component: () => import('./views/register.vue') },
        { path: '/login', component: () => import('./views/login.vue') },
        { path: '/search', component: () => import('./views/search.vue') },
        { path: '/history', component: () => import('./views/history.vue') },
        { path: '/shoucang', component: () => import('./views/shoucang.vue') },
        { path: '/about', component: () => import('./views/about.vue') },
        { path: '/coupleback', component: () => import('./views/coupleback.vue') },
        {
            path: '/classify',
            component: () => import('./views/classify.vue'),
            children: [
                { path: 'warmBlood', component: () => import('./components/warmBlood.vue') },
                { path: 'love', component: () => import('./components/love.vue') },
                { path: 'funy', component: () => import('./components/funy.vue') },
                { path: 'magic', component: () => import('./components/magic.vue') },
                { path: 'suspense', component: () => import('./components/suspense.vue') },
                { path: 'son', component: () => import('./components/son.vue') },
                { path: '', redirect: '/classify/warmBlood' }

            ]
        },
        {
            path: '/ranking',
            component: () => import('./views/ranking.vue'),
            children: [
                { path: 'hotSearch', component: () => import('./componentsTwo/hotSearch.vue') },
                { path: 'popularity', component: () => import('./componentsTwo/popularity.vue') },
                { path: 'bestSeller', component: () => import('./componentsTwo/bestSeller.vue') },
                { path: 'book', component: () => import('./componentsTwo/book.vue') },
                { path: 'end', component: () => import('./componentsTwo/end.vue') },
                { path: 'admission', component: () => import('./componentsTwo/admission.vue') },
                { path: '', redirect: '/ranking/hotSearch' }
            ]
        },
        { path: '/vip', component: () => import('./views/vip.vue') }

    ]
})
