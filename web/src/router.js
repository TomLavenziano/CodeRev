import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Profile from './views/Profile.vue';
import UserDashboard from './views/UserDashboard.vue';
import ProjectDashboard from './views/ProjectDashboard.vue';
import ProjectList from './views/ProjectList.vue';
import AddCommitReview from './views/AddCommitReview.vue';
import ViewReview from './views/ViewReview.vue';
import ViewCommit from './views/ViewCommit.vue';

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
            path: '/projects',
            component: ProjectList
        },
        {
            path: '/project/:id',
            name: 'ProjectDashboard',
            props: true,
            component: ProjectDashboard
        },
        {
            // path: '/project/:id/commit/:commit',
            path: '/commit/:id',
            props: true,
            component: ViewCommit
        },
        {
            path: '/review',
            component: ViewReview
        },
        {
            path: '/reviewcommit',
            component: AddCommitReview
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
        // {
        //     path: '/dashboard',
        //     component: UserDashboard
        // },
    ]
});
