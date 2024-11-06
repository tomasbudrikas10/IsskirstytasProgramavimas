import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router';
import ProductsView from './pages/ProductsView.vue'
import ProductView from './pages/ProductView.vue'
import CartView from './pages/CartView.vue'
import ProfileView from './pages/ProfileView.vue'
import OrdersView from './pages/OrdersView.vue'
import OrderView from './pages/OrderView.vue'
import LoginView from './pages/LoginView.vue'
import RegisterView from './pages/RegisterView.vue'

const routes = [
    { path: '/', component: ProductsView },
    { path: '/register', component: RegisterView},
    { path: '/login', component: LoginView},
    { path: '/product/:id', ProductView },
    { path: '/cart', component: CartView },
    { path: '/profile', component: ProfileView},
    { path: '/orders', component: OrdersView},
    { path: '/order/:id', component: OrderView},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
