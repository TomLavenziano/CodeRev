<template>
  <div id="ViewDiff">
      {{pid}}
      <div class="diff-holder" v-html="diffHtml"></div>
  </div>
</template>
<script>
import api from '../http-global';
import { Diff2Html } from 'diff2html';

export default {
    name: 'ViewDiff',
    data: function () {
        return {
            rawDiff: '',
            diffHtml: ''
        };
    },
    props: ['pid'],
    created() {
        this.generateHtmlFromDiff();
    },
    methods: {
        generateHtmlFromDiff() {
            api.get(`project/repo/diff/${this.pid}`).then(res => {
                console.log(res.data);
                this.rawDiff = res.data;
                this.diffHtml = Diff2Html.getPrettyHtml(res.data.diff, {inputFormat: 'diff', showFiles: true, matching: 'lines'});

            });

        }
    }
};
</script>
<style lang="less" scoped>

</style>
