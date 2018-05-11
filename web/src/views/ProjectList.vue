<!--
    List projects from CodeRev and GitHub as cards and allow you
    to import a GitHub Project into CodeRev
-->

<template>
  <div id="ProjectList">
          <div class="section-title">CodeRev Projects</div>
          <div class="project-scroller">
              <ListProjectCards></ListProjectCards>
          </div>
          <div class="section-title or">- Or Add a Project from GitHub -</div>
          <div class="gh-shrink">
              <AddProjectDialog></AddProjectDialog>
          </div>
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
        // flex-grow: 2;

        & .project-scroller {
            overflow-x: auto;
        }

        & .gh-shrink {
            width: 35%;
            margin: 0 auto;
            text-align: center;
        }

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
