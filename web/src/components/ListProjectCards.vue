<!--
    List CodeRev projects from the database as cards
-->
<template>
  <div id="ListProjectCards">
      <div class="project-container" >
          <router-link tag="div" class="card-panel project-card" v-for="project in codeRevProjects" :key="project.key" :to="{path: '/project/' + project.id}">
              {{project.name}}
              <div class="github-name"><hr />
                  {{ project.github_fullname }}
              </div>
          </router-link>
      </div>
  </div>
</template>
<script>
import api from '../http-global';
export default {
    name: 'ListProjectCards',
    data: function () {
        return {
            codeRevProjects: []
        };
    },
    created() {
        this.getCodeRevProjects();
    },
    methods: {
        getCodeRevProjects() {
            api.get('project')
                .then(res => {
                    console.log(res.data);
                    this.codeRevProjects = res.data;
                });
        }
    }
};
</script>
<style lang="less" scoped>
    @import '../assets/styles/imports.less';

    .project-container {
        display: inline-flex;
        margin: 0 auto;
        & .project-card {
            text-align: center;
            padding: 2.5%;
            font-size: 2.5em;
            font-weight: bold;
            flex-basis: 33%;

            & .github-name {
                font-size: 0.75em;
                font-weight: 400;
                color: #555;
            }

            &:hover {
                cursor: pointer;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }
    }

</style>
