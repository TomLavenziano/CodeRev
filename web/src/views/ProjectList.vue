<template>
  <div id="ProjectList">
          <div class="section-title">- CodeRev Projects -</div>
      <ListProjectCards></ListProjectCards>
          <div class="section-title">- Or Add a Project from GitHub -</div>
      <AddProjectDialog></AddProjectDialog>
  </div>
</template>
<script>
import ListProjectCards from '@/components/ListProjectCards.vue';
import AddProjectDialog from '@/components/AddProjectDialog.vue';

export default {
    name: 'ProjectList',
    components: {
        ListProjectCards,
        AddProjectDialog
    },
    data() {
        return {

        };
    }
};
</script>
<style lang="less" scoped>
    #ProjectList {
        width: 50%;
        margin: 0 auto;

        & .section-title {
            text-align: center;
            font-size: 2em;
            font-weight: bold;
        }
    }
</style>
