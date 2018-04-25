import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import UserDash from './views/UserDash.vue';
import NavPanel from './components/NavigationPanel.vue';
import Notifications from './components/Notifications.vue';

Vue.use(Vuetify);
Vue.component('my-userdash', UserDash);
Vue.component('my-navpanel', NavPanel);
Vue.component('my-notifs', Notifications);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
