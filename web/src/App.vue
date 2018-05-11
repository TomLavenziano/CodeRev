<template>
<div id="app">
    <v-app light>
        <!-- Top Navigation -->
        <v-toolbar class="blue darken-2" app>
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
        <v-navigation-drawer v-model="drawer" persistent app dark_>

            <v-list class="pa-1">
                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img :src="currentUser.picture">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ currentUser.name }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.stop="drawer = false">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>

                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="route in routes" :key="route.title" :to="{path: route.path}">
                        <v-list-tile-action>
                            <v-icon>{{ route.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
                        </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile @click="userLogout()">
                        <v-list-tile-action>
                            <v-icon>exit_to_app</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>

        <!-- Main Content -->
        <div class="content-container">
            <transition name="fade">
                <v-content>
                    <router-view></router-view>
                </v-content>
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
import api from './http-global';
export default {
    name: 'App',
    components: {},
    data: function () {
        return {
            title: 'CodeRev | Open Source Code Review',
            currentUser: {},

            drawer: null,
            routes: [
                {
                    title: 'Home',
                    icon: 'home',
                    path: '/'
                },
                {
                    title: 'Dashboard',
                    icon: 'dashboard',
                    path: '/dashboard'
                },
                {
                    title: 'Projects',
                    icon: 'work',
                    path: '/projects'
                },
                {
                    title: 'Profile',
                    icon: 'person',
                    path: '/profile'
                }
            ]
        };
    },
    created() {
        this.initUserSession();
    },
    methods: {
        initUserSession() {
            this.$session.start();
            if (this.$cookie.get('connect.sid')) {
                api.get('account').then(res => {
                    console.log(res.data);
                    this.currentUser = res.data;
                    this.$session.set('current_user', res.data);
                });
            }
        },
        userLogout() {
            this.$session.destroy();
            this.$cookie.delete('connect.sid');
            this.drawer = false;
            this.$router.push('/');
        },
        getAvatar() {
            api.get(this.currentUser.picture).then();
        }
    }
};
</script>
