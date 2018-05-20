<template>
    <div class="profile">
        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex xs24 sm12>
                    <v-card>
                        <v-card-media v-bind:src="require('@/assets/img/user-profile-bg.jpg')" height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <v-avatar>
                                    <a v-bind:href="user.html_url" target="_blank" style="color: white"><img v-bind:src="user.avatar_url" alt="John" style="width:100px; height:100px; margin-top:-70px;margin-left: 100px"></a>
                                </v-avatar>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="margin-top: 40px;">
                <v-flex xs6 sm3>
                    <v-card color="blue">
                        <v-card-title primary-title>
                            <div>
                                <div style="color:white;font-size: 30px;">{{user.login}}</div>
                                <p style="color:white;font-size:20px">{{user.bio}}</p>

                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
                <v-flex xs6 sm3 offset-sm1>
                    <v-card>
                        <v-list two-line style="padding: 0px">
                            <template>
                                <v-list-tile style="background: #f6f8fa;">
                                    <v-list-tile-content>
                                        <v-list-tile-title><b style="font-size: 20px">Associated Projects</b></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </template>
                    </v-list>
                </v-card>
                <v-card>
                    <v-list two-line style="padding: 0px">
                        <template>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title style="color: blue"><a v-bind:href="RecipeLink.html_url" target="_blank">{{projects[1].repo.name}}</a></v-list-tile-title>

                                    </v-list-tile-content>

                                </v-list-tile>
                                <v-divider></v-divider>
                                <v-list-tile>
                                 <v-list-tile-content>
                                    <v-list-tile-title style="color: blue"><a v-bind:href="CharityLink.html_url" target="_blank">{{projects[4].repo.name}}</a></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                                <v-divider></v-divider>
                                <v-divider></v-divider>
                                <v-list-tile>
                                 <v-list-tile-content>
                                    <v-list-tile-title style="color: blue"><a v-bind:href="CoderevLink.html_url" target="_blank">{{projects[7].repo.name}}</a></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                                <v-divider></v-divider>
                            </template>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6 sm3 offset-sm1>
                <v-card>
                    <v-list two-line style="padding: 0px">
                        <template>
                                <v-list-tile style="background: #f6f8fa;">
                                    <v-list-tile-content>
                                        <v-list-tile-title><b style="font-size: 20px">Recent Commits</b></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </template>
                    </v-list>
                </v-card>
                <v-card>
                    <v-list two-line style="padding: 0px">
                        <template>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title style="color: blue">Akhila/<b>codeRev</b></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'profile',
    data() {
        return {
            user: {},
            projects: {},
            CoderevLink: {},
            CharityLink: {},
            RecipeLink: {}

        };
    },
    methods: {
        getUsers: function () {
            axios.get('https://api.github.com/user/36486548').then(response => {
                this.user = response.data;
            }, error => {
                console.log(error);
            });
        },
        getProjects: function () {
            axios.get('https://api.github.com/users/akhilapamukuntla/events').then(response => {
                this.projects = response.data;
                // console.log(this.projects);
            }, error => {
                console.log(error);
            });
        },
        getCharityLink: function () {
            axios.get('https://api.github.com/repos/akhilapamukuntla/FreeCharity').then(response => {
                this.CharityLink = response.data;
                // console.log(this.projects);
            }, error => {
                console.log(error);
            });
        },
        getCoderevLink: function () {
            axios.get('https://api.github.com/repos/TomLavenziano/CodeRev').then(response => {
                this.CoderevLink = response.data;
                // console.log(this.projects);
            }, error => {
                console.log(error);
            });
        },
        getRecipeLink: function () {
            axios.get('https://api.github.com/repos/akhilapamukuntla/Recipe-Project').then(response => {
                this.RecipeLink = response.data;
                // console.log(this.projects);
            }, error => {
                console.log(error);
            });
        }

    },
    mounted() {
        console.log('hii');
        this.getUsers();
        this.getProjects();
        this.getCharityLink();
        this.getCoderevLink();
        this.getRecipeLink();
    }
};
</script>
