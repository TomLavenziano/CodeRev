<template>
<div id="app">
    <v-app light>
        <v-toolbar class="white">
            <v-toolbar-title v-text="title" class="title-bar" />
            <div class="top-navigation">
                <router-link to="/">Home</router-link>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/profile">Profile</router-link>
                <router-link to="/projectlist">Project List</router-link>
            </div>
        </v-toolbar>
        <div class="content-container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>

        <v-footer class="blue darken-2 fixed">
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="white--text ml-3 ">
                        Made with
                        <v-icon class="black--text ">♥</v-icon>
                        by <a class="white--text" href="https://github.com/TomLavenziano " target="_blank ">Tom Lavenziano</a>, <a class="white--text " href="https://github.com/anupsahaNYC " target="_blank ">Anup Saha</a>, and Akhila Pamukuntla
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
export default {
    name: 'App',
    components: {},
    data: () => ({
        title: 'CodeRev | Open Source Code Review',
        githubId: this.$route.query.g_id
    }),
    created() {
        this.$session.start();
        this.$session.set('github_username', this.$route.query.g_id);
        const url = `https://api.github.com/users/${this.$session.get('github_username')}`;
        console.log(url);
        axios.get(url).then(res => console.log(res));
    },
    // TODO: Store the github query param from above in a vuex store so that
    // it's available throughout the lifespan of the app. Consider running a post load
    // script that checks if an ID has been returned and if it has then query github and
    // store the entire user in vuex
    methods: {
        getAvatar() {
            axios.get(`https://github/com/users/${this.$session.get('github_id')}`)
                .then(console.log);
        }
    }
};
</script>
