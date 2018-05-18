<template>
    <div id="CodeContainer">
        <div class="button-container">
            <span>
                <button type="button" class="blue darken-2" @click="rejectCommit" name="reject">Save and Reject</button>
                <button type="button" class="blue darken-2" name="approve">Approve</button>
            </span>
        </div>
        <prism ref="prism" :language="language" :plugins="['line-numbers']" :code="rawCode" contenteditable="true"></prism>
    </div>
</template>
<script>
import api from '../http-global';
import Prism from 'vue-prismjs';
import 'prismjs/themes/prism.css';

export default {
    name: 'CodeContainer',
    components: {
        Prism
    },
    props: ['rawCode', 'language'],
    data: function () {
        return {
            // code: ''
        };
    },
    created() {

    },

    methods: {
        approveCommit() {

        },

        rejectCommit() {
            console.log(this.$refs.prism);
        }
    }
};
</script>
<style lang="less" scoped>
    @import '../assets/styles/imports.less';

    .button-container {
        & button {
            margin: 0 20px;
            padding: 10px;
            color: #FFF;
            border-radius: 5px;
        }
    }

</style>
