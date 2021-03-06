import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueSession from 'vue-session';
import VueCookie from 'vue-cookie';
import Vuetify from 'vuetify';
import VueHighlightJS from 'vue-highlightjs';
import '../node_modules/vuetify/dist/vuetify.min.css';
import './registerServiceWorker';

// import UserDashboard from './views/UserDashboard.vue';
// import NavPanel from './components/NavigationPanel.vue';
// import ProjectList from './components/ProjectList.vue';
// import ProjectPanel from './components/ProjectPanel.vue';
// import Notifications from './components/Notifications.vue';
// import ToDo from './components/ToDo.vue';

Vue.use(VueCookie);
Vue.use(VueSession, { persist: true });
Vue.use(Vuetify);
Vue.use(VueHighlightJS);

// Vue.component('my-todo', ToDo);
// Vue.component('my-userdash', UserDashboard);
// Vue.component('my-navpanel', NavPanel);
// Vue.component('my-projects', ProjectList);
// Vue.component('proj-panel', ProjectPanel);
// Vue.component('notif-card', Notifications);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
