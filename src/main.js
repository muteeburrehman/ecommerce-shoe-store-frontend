import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import LandingPage from './components/LandingPage.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import LandingPage from "@/components/LandingPage.vue";

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: SignIn },
    { path: '/signup', component: SignUp },
    // Default route if no other route matches
    {
        path: '/:catchAll(.*)', // Defining catch-all route
        component: LandingPage // or any other component you want to use as default
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
