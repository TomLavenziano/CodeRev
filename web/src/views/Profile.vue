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
        <v-layout row wrap>
            <v-flex xs6 sm3>
                <v-card color="blue">
                    <v-card-title primary-title>
                        <div>
                            <div style="color:white;font-size: 30px;">Bio</div>
                            <p style="color:white;font-size:20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam fugiat aut tempora rerum obcaecati sed maiores ipsa quos quasi asperiores iure, nemo perferendis repudiandae fugit est id adipisci mollitia?</p>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs7 sm4 offset-sm1>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <v-list two-line>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title>whatever</v-list-tile-title>
                                        <v-list-tile-sub-title class="text--primary">bye</v-list-tile-sub-title>
                                        <v-list-tile-sub-title></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-list-tile-action-text>hii</v-list-tile-action-text>
                                        <v-icon color="grey lighten-1"></v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </v-list>
                            <v-list two-line>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title>whatever</v-list-tile-title>
                                        <v-list-tile-sub-title class="text--primary">bye</v-list-tile-sub-title>
                                        <v-list-tile-sub-title></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-list-tile-action-text>hii</v-list-tile-action-text>
                                        <v-icon color="grey lighten-1"></v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </v-list>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div </div>
</template>
<script>
import UserProfile from '@/components/UserProfile.vue'

export default {
    name: 'profile',
    components: {
        UserProfile
    }
}
</script>
