import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
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
        }
    ]
})

export default router;