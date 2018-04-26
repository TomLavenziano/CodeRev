import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueSession from 'vue-session';
import Vuetify from 'vuetify';
import '../node_modules/vuetify/dist/vuetify.min.css';
import './registerServiceWorker';

Vue.use(VueSession, { persist: true });
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
