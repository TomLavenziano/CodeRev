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
                                    <a href="https://github.com/akhilapamukuntla" target="_blank" style="color: white"><img v-bind:src="require('@/assets/mypic.jpg')" alt="John" style="width:100px; height:100px; margin-top:-70px;margin-left: 100px"></a>
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
import UserProfile from '@/components/UserProfile.vue';
import axios from 'axios';

export default {
    name: 'profile',
    components: {
        UserProfile
    },
    data() {
        return {
            user: {}
        };
    },
    methods: {
        getUsers: function () {
            axios.get('https://api.github.com/user/36486548').then(response => {
                this.user = response.data;
            }, error => {
                console.log(error);
            });
        }
    },
    mounted() {
        console.log('hii');
        this.getUsers();
    }
};
</script>
