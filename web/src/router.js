import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Profile from './views/Profile.vue';
import UserDashboard from './views/UserDashboard.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Landing
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: UserDashboard
        }
    ]
});
