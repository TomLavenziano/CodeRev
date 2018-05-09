import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueSession from 'vue-session';
import Vuetify from 'vuetify';

import '../node_modules/vuetify/dist/vuetify.min.css';
import './registerServiceWorker';

import UserDashboard from './views/UserDashboard.vue';
import NavPanel from './components/NavigationPanel.vue';
import ProjectList from './components/ProjectList.vue';
import ProjectPanel from './components/ProjectPanel.vue';
import Notifications from './components/Notifications.vue';
import ToDo from './components/ToDo.vue';
import RecentReviews from './components/RecentReviews.vue';
import RecentReviewPanel from './components/RecentReviewPanel.vue';

Vue.use(VueSession, { persist: true });
Vue.use(Vuetify);
Vue.component('my-todo', ToDo);
Vue.component('my-userdash', UserDashboard);
Vue.component('my-navpanel', NavPanel);
Vue.component('my-projects', ProjectList);
Vue.component('proj-panel', ProjectPanel);
Vue.component('notif-card', Notifications);
Vue.component('recent-reviews', RecentReviews);
Vue.component('rev-panel', RecentReviewPanel);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
