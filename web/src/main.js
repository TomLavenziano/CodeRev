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
import Notifications from './components/Notifications.vue';
import ProjectList from './components/ProjectList.vue';

Vue.use(VueSession, { persist: true });
Vue.use(Vuetify);

Vue.component('my-userdash', UserDashboard);
Vue.component('my-navpanel', NavPanel);
Vue.component('my-notifs', Notifications);
Vue.component('my-projects', ProjectList);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
