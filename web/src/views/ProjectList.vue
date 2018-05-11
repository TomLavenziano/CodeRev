<!--
    List projects from CodeRev and GitHub as cards and allow you
    to import a GitHub Project into CodeRev
-->

<template>
  <div id="ProjectList">
          <div class="section-title">CodeRev Projects</div>
      <ListProjectCards></ListProjectCards>
          <div class="section-title or">- Or Add a Project from GitHub -</div>
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
        width: 90%;
        margin: 0 auto;

        & .section-title {
            color: #333;
            text-align: center;
            font-size: 3.5em;
            font-weight: 500;

            &.or {
                font-size: 2.5em;
                font-weight: 400;
            }
        }
    }
</style>
