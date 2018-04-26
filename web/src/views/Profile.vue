<template>
    <div class="profile">
        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex xs24 sm12>
                    <v-card>
                        <v-card-media v-bind:src="require('@/assets/user-profile-bg.jpg')" height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <v-avatar>
                                    <img v-bind:src="require('@/assets/user.png')" alt="John" style="width:100px; height:100px; margin-top:-70px;margin-left: 100px">
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
                                <div style="color:white;font-size: 30px;">{{user.id}}</div>
                                <p style="color:white;font-size:20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam fugiat aut tempora rerum obcaecati sed maiores ipsa quos quasi asperiores iure, nemo perferendis repudiandae fugit est id adipisci mollitia?</p>
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
                                        <v-list-tile-title style="color: blue">{{user.login}}/<b>codeRev</b></v-list-tile-title>
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
                                        <v-list-tile-title><b style="font-size: 20px">Recent Commits/Reviews</b></v-list-tile-title>
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
import UserProfile from '@/components/UserProfile.vue'
import axios from 'axios'

export default {
    name: 'profile',
    components: {
        UserProfile
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        getUsers: function() {
            axios.get('https://api.github.com/user/10148379').then((response) => { this.user = response.data }, (error) => { console.log(error) });
        }
    },
        mounted() {
            // console.log("hii")
            this.getUsers()
        }
}
</script>