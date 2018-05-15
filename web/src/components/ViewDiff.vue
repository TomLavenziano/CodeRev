<template>
  <div id="ViewDiff">
      {{pid}}
    <div id="app">
        <brace
          :fontsize="'22px'"
          :theme="'monokai'"
          :mode="'javascript'"
          :codefolding="'markbegin'"
          :softwrap="'free'"
          :selectionstyle="'text'"
          :highlightline="true">
        </brace>
      </div>
      <div class="diff-holder" v-html="diffHtml"></div>
  </div>
</template>
<script>
import api from '../http-global';
import { Diff2Html } from 'diff2html';
import Brace from 'vue-bulma-brace';

export default {
    name: 'ViewDiff',
    data: function () {
        return {
            rawDiff: '',
            diffHtml: ''
        };
    },
    props: ['pid', 'raw'],
    created() {
        this.generateHtmlFromDiff();
    },
    methods: {
        generateHtmlFromDiff() {
            if (this.raw) {
                console.log(this.raw);
                this.diffHtml = Diff2Html.getPrettyHtml(this.raw.diff, { inputFormat: 'diff', showFiles: true, matching: 'lines' });
            } else {
                api.get(`project/repo/diff/${this.pid}`).then(res => {
                    console.log(res.data);
                    this.rawDiff = res.data.diff;
                    this.diffHtml = Diff2Html.getPrettyHtml(res.data.diff, { inputFormat: 'diff', showFiles: true, matching: 'lines' });
                });
            }
        }
    }
};
</script>
<style lang="less" scoped>

</style>
