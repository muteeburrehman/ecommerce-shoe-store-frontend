import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import LandingPage from './components/LandingPage.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import LandingPage from "@/components/LandingPage.vue";
// import NavBar from './components/NavBar.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import ProductsPage from "@/views/ProductsPage.vue";

axios.defaults.baseURL = "http://localhost:8000"
// *********** Routes ****************
const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: SignIn },
    { path: '/signup', component: SignUp },
    {path: '/products', component: ProductsPage },
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
