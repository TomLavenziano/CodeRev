<template>
<div id="landing">
    <v-content>
        <section>
            <v-parallax :src="parallaxBackground" class="parallax-bg">
                <v-layout column align-center justify-center class="white--text">
                    <img class="img-logo" :src="codeRevLogo" alt="CodeRev">
                    <h1 class="logo-text mb-2 display-4 text-xs-center">CodeRev</h1>
                    <div class="display-1 mb-3 text-xs-center logo-text">A Code Review Platform For Open Source Projects</div>

                    <GitHubLogin/>

                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="display-1">The easiest way to add safety to your development workflow</h2>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">group</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Collaborative</div>
                                    </v-card-title>
                                    <v-card-text class="centered">
                                        Whether your teammates are in the US or the other side of the world, now you can collaborate in real-time. With a pre-established process and a smooth development pipeline, you'll never have to worry about broken code making it's way to production ever again.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Fast</div>
                                    </v-card-title>
                                    <v-card-text class="centered">
                                        Just because we're the only code review platform for open source projects doesn't mean that we don't strive to remain the best. CodeRev is currently the fastest and most productive option on the market today.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class=" elevation-0 transparent ">
                                    <v-card-text class="text-xs-center ">
                                        <v-icon x-large class="blue--text text--lighten-2 ">build</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center ">
                                        <div class="headline text-xs-center ">100% Open Source</div>
                                    </v-card-title>
                                    <v-card-text class="centered">
                                        CodeRev is fully open source, that means that the source code is publicly available for the good of the community along with an open source license – meaning that other developers can see exactly how it works, contribute to it, and improve it.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax :src="parallaxMiddleBackground " height="480 ">
                <v-layout column align-center justify-center>
                    <div class="display-2 logo-text mb-3 text-xs-center ">Code Review has never been easier</div>
                    <em>Improve your workflow today</em>
                    <GitHubLogin/>
                </v-layout>
            </v-parallax>
        </section>
    </v-content>
</div>
</template>

<style lang="less">
@import '../assets/styles/landing.less';
</style>

<script>
import GitHubLogin from '@/components/GitHubLogin.vue';

export default {
    name: 'Landing',
    components: {
        GitHubLogin
    },
    data: () => ({
        parallaxBackground: require('@/assets/img/landing-hero.jpg'),
        parallaxMiddleBackground: require('@/assets/img/landing-hero--middle.jpg'),
        codeRevLogo: require('@/assets/img/CodeRev.svg')
    })
};
</script>
