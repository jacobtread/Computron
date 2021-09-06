import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

// A Constants that represents an empty page
const EmptyPage = {template: '<h1>No Content</h1>'}

/*
* This list defines the routes that we can
* view in the app. Each route consists of
* the following parts:
*
* path: The url path for the route
* component: The component to display
*/
const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/downloads', component: EmptyPage },
    { path: '/tutorials', component: EmptyPage },
    { path: '/support', component: Support },
]

// Create a new VueJS router this comes from the vue-router library
const router = createRouter({
    history:
        /*
        * Settings the type of history / urls the router will use
        *
        * When not in production mode we use the hashed based history
        * because we may not be in an environment where we cannot redirect
        * all to the index.html
        *
        * Hash History = #/, #/contact, #/downloads
        * History = /, /contact, /downloads
        */
        process.env.NODE_ENV === 'production' ?
            createWebHistory('/Computron')
        : createWebHashHistory(),
    routes /* Passing the routes to the createRouter function */,
});

// Reset the page scroll after they change pages
router.afterEach(() => document.body.scrollTop = document.documentElement.scrollTop = 0)

const app = createApp(App); // Create a new VueJS application
app.use(router); // Tell the vue app to use the router
app.mount('#app'); // Mount the VueJS application on the element with the ID "app"