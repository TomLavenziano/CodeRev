<!--
    Display details and list reviews for an individual commit and allow you to start a new review
-->

<template>
  <div id="ViewCommit">
      <h4>Commit: {{ id }}</h4>
      <ViewDiff pid="id"></ViewDiff>
  </div>
</template>
<script>
import ViewDiff from '@/components/ViewDiff.vue';

export default {
    name: 'ViewCommit',
    components: {
        ViewDiff
    },
    props: ['id'],
    data() {
        return {

        };
    }
};
</script>
<style lang="less" scoped>
</style>
