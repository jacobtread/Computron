import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

const EmptyPage = {template: '<h1>No Content</h1>'}

const routes = [
    { path: '/', component: EmptyPage },
    { path: '/contact', component: EmptyPage },
    { path: '/downloads', component: EmptyPage },
    { path: '/tutorials', component: EmptyPage },
    { path: '/support', component: EmptyPage },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app =createApp(App);
app.use(router)
app.mount('#app')