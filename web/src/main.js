import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueSession from 'vue-session';
import Vuetify from 'vuetify';
import '../node_modules/vuetify/dist/vuetify.min.css';
import './registerServiceWorker';

// import UserDash from './views/UserDash.vue';
// import NavPanel from './components/NavigationPanel.vue';
// import Notifications from './components/Notifications.vue';
// import ToolBar from './components/ToolBar.vue';
// import dLay from '/.components/DashboardLayout.vue';

Vue.use(VueSession, { persist: true });
Vue.use(Vuetify);

// Vue.component('d-lay', dLay);
// Vue.component('my-userdash', UserDash);
// Vue.component('my-navpanel', NavPanel);
// Vue.component('my-notifs', Notifications);
// Vue.component('my-tb', ToolBar);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
