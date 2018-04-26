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

<script async defer src="https://buttons.github.io/buttons.js">
</script>

<script>
export default {
    name: 'App',
    components: {},
    data: () => ({
        title: 'CodeRev | Open Source Code Review',
    })
};
</script>
