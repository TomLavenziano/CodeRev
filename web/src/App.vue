<template>
<div id="app">
    <v-app light>
        <!-- Top Navigation -->
        <v-toolbar class="white">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="title-bar">CodeRev</v-toolbar-title>
            <div class="top-navigation">
                <router-link to="/">Home</router-link>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/profile">Profile</router-link>
                <router-link to="/projectlist">Project List</router-link>
            </div>
        </v-toolbar>

        <!-- Side Navigation -->
        <v-navigation-drawer
         v-model="drawer"
         :mini-variant="mini"
         temporary
         dark
         absolute
       >
         <v-list class="pa-1">
           <v-list-tile v-if="mini" @click.stop="mini = !mini">
             <v-list-tile-action>
               <v-icon>chevron_right</v-icon>
             </v-list-tile-action>
           </v-list-tile>
           <v-list-tile avatar tag="div">
             <v-list-tile-avatar>
               <img src="https://randomuser.me/api/portraits/men/85.jpg" >
             </v-list-tile-avatar>
             <v-list-tile-content>
               <v-list-tile-title>{{}}</v-list-tile-title>
             </v-list-tile-content>
             <v-list-tile-action>
               <v-btn icon @click.stop="mini = !mini">
                 <v-icon>chevron_left</v-icon>
               </v-btn>
             </v-list-tile-action>
           </v-list-tile>
         </v-list>
         <v-list class="pt-0" dense>
           <v-divider light></v-divider>
           <v-list-tile v-for="item in items" :key="item.title" @click="">
             <v-list-tile-action>
               <v-icon>{{ item.icon }}</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
               <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list>
       </v-navigation-drawer>

        <!-- Main Content -->
        <div class="content-container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>

        <!-- Footer -->
        <v-footer class="blue darken-2 fixed">
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="white--text ml-3 ">
                        Made with
                        <v-icon class="black--text ">♥</v-icon>
                        by <a class="white--text" href="https://github.com/TomLavenziano " target="_blank ">Tom Lavenziano</a>, <a class="white--text " href="https://github.com/anupsahaNYC " target="_blank ">Anup Saha</a>, and <a class="white--text " href="https://github.com/akhilapamukuntla " target="_blank ">Akhila Pamukuntla</a>
                    </div>
                </v-flex>
            </v-layout>
        </v-footer>

    </v-app>
</div>
</template>

<style lang="less">
@import 'assets/styles/app.less';
</style>

<script>
import axios from 'axios';
import vhttp from './http-global';
export default {
    name: 'App',
    components: {},
    data: function () {
        return {
            title: 'CodeRev | Open Source Code Review',
            currentUser: {},
            drawer: null,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            mini: false,
            right: null
        };
    },
    created() {
        this.initUserSession();
    },
    // TODO: Store the github query param from above in a vuex store so that
    // it's available throughout the lifespan of the app. Consider running a post load
    // script that checks if an ID has been returned and if it has then query github and
    // store the entire user in vuex
    methods: {
        initUserSession() {
            this.$session.start();
            // vhttp.get('account').then(res => {
            //     console.log(res);
            //     this.currentUser = res.data;
            //     this.$session.set('current_user', res.data);
            //     console.log(this.$session.set('current_user'));
            // });
            this.$session.set('coderev_uid', this.$route.query.uid);
        },
        getAvatar() {
            vhttp.get(`https://github.com/users/${this.$session.get('uid')}`)
                .then(console.log);
        }
    }
};
</script>
