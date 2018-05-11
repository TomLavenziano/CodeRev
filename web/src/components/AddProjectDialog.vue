<template>
  <div id="AddProjectDialog">
      <div class="add-project-container">
          <div class="add-project-card-container" v-for="gProject in gitHubRepos" :key="gProject.id">
              <div class="card-panel g-project-card" @click="importGithHubRepo(gProject)">
                  {{gProject.name}}
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import api from '../http-global';

export default {
    name: 'AddProjectDialog',
    data: () => {
        return {
            gitHubRepos: []
        };
    },
    created() {
        this.getGitHubRepos();
    },
    methods: {
        getGitHubRepos() {
            console.log('Getting GitHub repos...');
            api.get('project/github/repos').then(res => {
                console.log(res.data);
                this.gitHubRepos = res.data;
            });
        },

        importGithHubRepo(repoData) {
            console.log('Importing repo...');
            console.log(repoData);
            api.post('project/github/import', repoData, {
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://lvh.me:8080',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(res => {
                console.log(res);
                console.log('Importing Complete for repo: ' + repoData.id);
                this.$router.push(`/project/${repoData.id}`);
            });
        }
    }
};
</script>
<style lang="less" scoped>
    @import '../assets/styles/imports.less';

    .add-project-container {

        & .or-project {
            text-align: center;
            font-size: 2em;
            font-weight: bold;
        }

        & .g-project-card {
            padding: 5%;
            font-size: 1.5em;

            &:hover {
                cursor: pointer;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }
    }

</style>
