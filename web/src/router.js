import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Profile from './views/Profile.vue';
import UserDashboard from './views/UserDashboard.vue';
import ProjectDashboard from './views/ProjectDashboard.vue';
import ProjectList from './views/ProjectList.vue';
import ReviewCommit from './views/ReviewCommit.vue';
import ViewReview from './views/ViewReview.vue';

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
            path: '/project/:id',
            name: 'ProjectDashboard',
            props: true,
            component: ProjectDashboard
        },
        {
            path: '/projects',
            component: ProjectList
        },
        {
            path: '/review',
            component: ViewReview
        },
        {
            path: '/reviewcommit',
            component: ReviewCommit
        },
        {
            path: '/dashboard',
            component: UserDashboard
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
});
