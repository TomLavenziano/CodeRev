<template>
  <div id="ViewDiff">
      <!-- <div class="diff-holder" v-html="diffHtml"></div> -->
      <CodeContainer language="diff" :rawCode="rawDiff"></CodeContainer>
  </div>
</template>
<script>
import api from '../http-global';
import { Diff2Html } from 'diff2html';
import CodeContainer from '@/components/CodeContainer.vue';

export default {
    name: 'ViewDiff',
    data: function () {
        return {
            rawDiff: '',
            diffHtml: ''
        };
    },
    props: ['pid', 'raw'],
    components: {
        CodeContainer
    },
    created() {
        this.generateHtmlFromDiff();
    },
    methods: {
        generateHtmlFromDiff() {
            // if (this.raw) {
            //     console.log(this.raw);
            //     this.diffHtml = Diff2Html.getPrettyHtml(this.raw.diff, { inputFormat: 'diff', showFiles: true, matching: 'lines' });
            // } else {
            api.get(`project/repo/diff/${this.pid}`).then(res => {
                console.log(res.data);
                this.rawDiff = res.data.diff;
                this.diffHtml = Diff2Html.getPrettyHtml(res.data.diff, { inputFormat: 'diff', showFiles: true, matching: 'lines' });
            });
            // }
        }
    }
};
</script>
<style lang="less" scoped>

</style>
